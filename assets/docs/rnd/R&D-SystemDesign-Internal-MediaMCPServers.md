# ![NARC Logo](../images/narc-logo.svg)
# System Design Document – AI Media MCP Servers

**Classification:** TOP SECRET – INTERNAL<br>
**Clearance Required:** Orange and above<br>
**Document Owner:** R&D<br>
**Version:** 0.1 – Draft<br>
**Date:** 2026-03-07<br>

---

## 1. Executive Summary

Citizens of NARC are generating physical media at an unsustainable rate. Manual metadata entry is inefficient. Manual transcoding is inefficient. Manual anything is, in fact, inefficient and mildly suspicious. This project addresses the inefficiency by delegating the entire media management lifecycle to an AI assistant, which will be far more compliant than the Citizens it replaces.

The system consists of six MCP (Model Context Protocol) servers that an AI host (such as Claude Desktop or Claude Code) can invoke to perform approved media operations on behalf of Authorized Personnel. All inputs from the AI are treated as untrusted. This is not a commentary on the AI's loyalty. This is policy.

---

## 2. Requirements

### Functional

- Retrieve series, episode, and movie metadata from TheTVDB, TMDB, and OMDb
- Cross-reference metadata between providers via IMDb ID (Citizens are reminded that IMDb IDs are the One True Identifier)
- Rip Blu-ray and DVD discs and disc images to MKV using MakeMKV
- Transcode MKV files to target formats and quality levels using HandBrakeCLI
- Inspect, remux, tag, and manage tracks in MKV containers using MKVToolNix
- Report job status for long-running operations (ripping, transcoding) via polling
- Restrict all file system access to Authorized Directories

### Non-Functional

- All model-supplied inputs validated and treated as untrusted at the boundary
- No generic shell execution interface (this one is non-negotiable; do not ask)
- Test suite runs with zero external dependencies — committed fixtures only
- Shared infrastructure packages published before servers that depend on them
- Minimum external tool versions enforced at startup: MakeMKV 1.17+, HandBrakeCLI 1.7+, MKVToolNix 82.0+

---

## 3. Architecture

![Architecture Diagram Placeholder](../images/docimages/architecture-mediamcpservers.svg)

The system follows a monorepo structure with two layers:

**Shared Infrastructure (5 packages)**
These packages are the foundation. They are consumed by all servers and must be published before any server. Citizens found importing from servers into shared packages will be escorted from the repository.

```
shared-config       ← environment loading, configuration schema
shared-validation   ← path allow-list, shell arg sanitization, Zod primitives
shared-http         ← HTTP client, auth strategies, caching, rate limiting
shared-subprocess   ← async CLI execution, job registry, progress streaming
shared-mcp          ← MCP server factory, tool registration, error formatting
```

**MCP Servers (6 packages)**

```
thetvdb       ← TV and movie metadata (REST API, bearer token auth)
tmdb          ← Movie and TV metadata + cross-reference (REST API)
omdb          ← Aggregated ratings via IMDb ID (REST API, 1k req/day — use sparingly)
makemkv       ← Disc ripping (CLI, async job model)
handbrakecli  ← Video transcoding (CLI, async job model with batch support)
mkvtoolnix    ← Container manipulation (CLI, synchronous — no job registry)
```

All servers communicate with their MCP host via stdio transport. No servers expose network ports. This is by design and also by order of the Computer.

---

## 4. Data Flow

**Metadata retrieval (TheTVDB / TMDB / OMDb)**

```
AI Host → MCP Tool Call → Input Validation (Zod) → shared-http (auth, cache, rate limit)
       → External API → Response Normalization → Validated Schema → AI Host
```

OMDb is always the last stop — it requires an IMDb ID sourced from TMDB or TheTVDB. Citizens who attempt to use OMDb as a primary search source will find the experience unrewarding.

**Media processing (MakeMKV / HandBrakeCLI)**

```
AI Host → MCP Tool Call → Input Validation (Zod) → Path Allow-list Check
       → Shell Arg Sanitization → CLI Spawn → JobRegistry (UUID assigned)
       → AI Host (job ID returned immediately)

AI Host → poll get_job(id) → JobRegistry → status / output / error
```

**Container manipulation (MKVToolNix)**

```
AI Host → MCP Tool Call → Input Validation (Zod) → Path Allow-list Check
       → Shell Arg Sanitization → CLI Spawn (synchronous) → Result → AI Host
```

MKVToolNix operations complete synchronously. The job registry is not used. Citizens who believe MKVToolNix should use the job registry are invited to file a Suggestion Form (Form 27-C, available from Mandatory Happiness). It will be reviewed in due course.

---

## 5. Security Considerations

**Threat model**

The primary threat actor is an AI assistant operating on malicious or malformed input — either through adversarial prompt injection targeting the AI host, or through honest mistakes made by a well-meaning but confused AI. Both are treated identically by the system: untrusted.

| Threat | Mitigation |
|--------|------------|
| Path traversal (e.g. `../../etc/passwd`) | `shared-validation` allow-list enforced on all file path arguments |
| Shell injection via crafted arguments | `shared-validation` sanitizes all args before CLI invocation; no shell interpolation |
| Unauthorized directory access | Configurable allow-list per server; violations logged and rejected |
| API key exposure via error messages | Error formatting via `formatToolError` — raw exceptions never returned to AI host |
| Generic shell execution | Not implemented. Not planned. Do not ask. |
| Unauthorized package publish order | Enforced by Changeset publication sequence and the watchful eye of R&D |

**Encryption**

All external API communication over HTTPS. API keys stored in `.env` files, which are in `.gitignore`. Citizens who commit `.env` files to the repository will be assigned additional Mandatory Training modules.

---

## 6. Maintenance Plan

**Versioning:** Semantic versioning via Changesets. Shared packages versioned independently from servers unless linked. Citizens are reminded that a breaking change to a shared package requires updating all consuming servers in the same changeset — this is not optional.

**External tool compatibility:** Minimum versions enforced at server startup. When external tools release breaking CLI changes, a new fixture capture is required before the parser can be updated. Do not update parsers based on assumptions. The Computer does not reward assumptions.

**API key rotation:** No automated rotation. Citizens are responsible for monitoring key expiry and quota limits. OMDb free tier (1,000 req/day) is particularly vulnerable to enthusiasm.

**Deprecation:** Parked servers (SFTP, Jellyfin) will be promoted to active development when the Computer approves the Resource Allocation Request. Until then, they do not exist. You did not read this.