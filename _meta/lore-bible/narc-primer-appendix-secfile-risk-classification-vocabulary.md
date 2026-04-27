# NARC Internal Security — Risk Classification Label Vocabulary
**Type:** Author-facing reference — working vocabulary for SECFILE Risk Classification field
**Source:** Consolidated from 8 model-generated label sets (BR-003v4, 2026-04-20). Sources: ChatGPT (logged in), ChatGPT (logged out), Claude, DeepAI, DuckAI/Llama4Scout, DuckAI/GPT-OSS-120B, Gemini (logged in), Gemini (logged out).
**Updated:** BR-003v4, 2026-04-20 — five labels added from live file review (Connective, Procedural, Administrative, Expansive, Accounting)
**Filed Under:** `_meta/lore-bible/` — author-facing reference

> **Usage:** The Risk Classification field in a NARC Internal Security file takes a single label from this vocabulary. The label is the complete record. No scale is published. No criteria are documented. The label implies more than it states. Select at author discretion; the choice should feel inevitable in retrospect, not obvious in advance.
>
> **Register check:** If a label sounds like a threat level, an HR performance category, or a joke, do not use it. The comedy, if any, comes from applying a neutral label to a specific subject — not from the label itself.

---

## Canonical Label Vocabulary

Organized by conceptual cluster for author navigation. Clusters are author-facing only — they do not appear in security files.

---

### Presence and State
*Labels describing what the subject is or how they exist within the institution.*

| Label | Register |
|-------|----------|
| **Ambient** | Present without agency. The subject occupies a space rather than acting within it. |
| **Persistent** | The subject has continued across multiple review cycles without change. The continuity is the observation. |
| **Latent** | Capability or significance exists but has not been activated or realized. |
| **Latent Presence** | Exists within the system's awareness but remains dormant or difficult to locate. |
| **Inert** | No active classification concerns at time of filing. Inert does not mean inactive. |
| **Residual** | Something left over; an unintended byproduct of a primary process that has not been removed. |
| **Dormant Profile** | Has been inactive for a period but remains within the system. The file stays open. |
| **Transient Contact** | Appears sporadically. Requires only episodic review. |
| **Fringe-Stable** | Operates at the edge of the system. Does not fall out. |

---

### Access and Boundary
*Labels describing how the subject moves through, or relates to, institutional limits.*

| Label | Register |
|-------|----------|
| **Access Persistent** | Continued presence within systems regardless of expected lifecycle limits. |
| **Bounded** | Operates within defined limits. The limits were defined by someone. That someone is noted elsewhere. |
| **Boundary Fluid** | Crosses operational or conceptual limits without friction. The crossings are not flagged. |
| **Boundary Inconsistent** | Adheres to defined limits irregularly. Both adherence and non-adherence are in the record. |
| **Asset-Adjacent** | Not classified as an asset. Near assets. Classification reflects the gap between the two. |
| **Perimeter** | Operates at the boundary of the organization. Not inside; not outside; at the edge. |
| **Confluence** | A junction point where multiple factors or entities meet, in ways that are noted but not specified. |
| **Contained Influence** | Influence is present. It has been identified as contained. The containment method is not described. |

---

### Behavioral
*Labels describing patterns of action, output, or conduct.*

| Label | Register |
|-------|----------|
| **Observation Sensitive** | Behavior changes measurably when monitoring is perceived or confirmed. |
| **Observation Resistant** | Attempts to monitor yield incomplete or inconsistent data. Not evasion. Resistance. |
| **Behavioral Plateau** | Activity level has remained static over an extended period. The plateau is the record. |
| **State Retentive** | Preserves prior conditions beyond their intended lifecycle. |
| **Directive Interpretive** | Instructions are executed through a subjective or adaptive lens. |
| **Operational Drift** | Gradual migration away from baseline behavior without triggering an overt flag. |
| **Baseline Deviation** | Functions normally. The "normal" is distinct from the standard operating baseline. |
| **Variance** | Deviates from the expected pattern. The deviation is noted. Its significance is not assessed. |
| **Discrepancy** | Does not fully align with expectations or norms. Both the expectation and the discrepancy are in the record. |
| **Consensus Divergence** | Present and functional. The subject's version of events does not align with the institutional record. |
| **Asymmetry** | Not balanced or symmetrical in its relationship to surrounding systems or entities. |
| **Expansive** | Operational presence consistently exceeds defined scope boundaries without formal amendment. Applied where reach is the defining characteristic rather than any specific conduct. |
| **Connective** | The subject forms links between otherwise separate information streams, personnel, or systems. The connections are functional. Their aggregate effect is not fully mapped. |
| **Catalytic** | Outputs are consistently absorbed into operational environments before review states are complete. The system moves because the subject has already acted. Applied where the defining characteristic is the acceleration of adoption independent of authorization sequencing. |

---

### Procedural and Compliance
*Labels describing the subject's relationship to process, documentation, and audit.*

| Label | Register |
|-------|----------|
| **Nominally Compliant** | Formally adheres to requirements without substantive alignment to their intent. |
| **Surface Compliant** | Compliance with observed and auditable requirements. The surface is not disputed. |
| **Procedurally Incomplete** | Required processes exist but are not fully realized, enforced, or closed. |
| **Audit Opaque** | Internal processes cannot be fully reconstructed after the fact. |
| **Audit Whisper** | Audit trail is present but minimally detailed. It is there. It does not elaborate. |
| **Policy Echo** | Repeatedly references outdated procedural language. The echo persists. |
| **Compliance Footprint** | The extent of adherence to documented standards is measurable. The measurement is in the file. |
| **Escalation Absorbent** | Issues directed at the subject do not propagate further. They stop here. |
| **Deferred Review** | Flagged for future assessment. Currently inactive. The review date is not attached. |
| **Pre-Analytical** | Has not yet been fully parsed. The true classification is still being calculated. |
| **Procedural** | Operational activity is defined by and expressed through process structures. Conduct is process-shaped. Applied where the subject's primary characteristic is the transformation of states into documented form. |
| **Administrative** | Subject's function is the maintenance of institutional process infrastructure itself. Distinct from Procedural: Administrative subjects define and sustain the systems others operate within. |
| **Accounting** | Applied where the subject's defining characteristic is the continuous tracking of states — financial, operational, or otherwise — across formal and informal systems simultaneously. Implies parallel visibility not fully reflected in official records. |

---

### Authority and Intent
*Labels describing the subject's relationship to institutional power and observed purpose.*

| Label | Register |
|-------|----------|
| **Intent Opaque** | Actions are observable. Underlying purpose remains indeterminate. |
| **Authority Ambiguous** | Control boundaries are unclear or overlapping. Decision chains are not fully resolved. |
| **Authority Reflective** | Mirrors the intent of authority rather than explicit instruction. |
| **Discretionary Node** | Decisions occur here without clear upstream attribution. |
| **Nodal** | A junction point. Things pass through or because of this subject in structurally significant ways. |
| **Locally Authoritative** | Strong control within a limited scope. Does not translate beyond it. |
| **Vested-Oblique** | A deep interest in the institution exists. It is not directly stated or fully mapped. |

---

### Institutional and Structural
*Labels describing the subject's role within the broader institutional architecture.*

| Label | Register |
|-------|----------|
| **Historically Entrenched** | Practices or presence sustained primarily through longevity rather than validation. |
| **Protocol Anchor** | If removed, a significant portion of infrastructure would be affected. Dependencies are not documented. |
| **Environmental Constant** | So deeply integrated into the ecosystem that the subject is effectively part of the architecture. |
| **Legacy Integration** | Outdated and modified to remain relevant. Critical to daily operations despite its age. |
| **Dependency Inverted** | Systems rely on this subject in ways not formally recognized. |
| **Continuity Sensitive** | Presence or absence affects ongoing operations in ways not fully modeled. |
| **Operationally Adjacent** | Proximity to critical processes without formal inclusion. Influence boundaries unclear. |
| **Scope Confluence** | Functional domain intersects multiple departmental boundaries. Overlap is noted. |
| **Systemic Friction** | Not a threat. A persistent factor that slows or complicates adjacent processes. |
| **Load-Bearing** | Continued function is required for something else to remain stable. What that something is: noted elsewhere. |
| **Buffered** | A layer of protection or insulation exists between this subject and the surrounding system. |
| **Synthetic-Neutral** | Behavior is consistent and measurable. No inherent organizational alignment. |
| **Standard-Variable** | Theoretically within normal parameters. Fluctuates without warning or explanation. |
| **Cyclical** | Output or behavior repeats with predictable pattern and impact. The pattern is the record. |
| **Structural** | The subject is an element of the institution's operating structure rather than a participant within it. Removal would require structural adjustment, not replacement. Applied where the subject's defining characteristic is their position in the architecture rather than their conduct within it. |

---

### Classification and Review Status
*Labels describing the subject's standing within Internal Security's review framework.*

| Label | Register |
|-------|----------|
| **Attended** | Something else is monitoring on Internal Security's behalf. Possibly without the subject's awareness. |
| **Acknowledged** | Seen, logged, and filed. Whether the acknowledgment was mutual is not specified. |
| **Referenced** | Appears in other subjects' files with a frequency that warranted its own classification. |
| **Cooperative** | Cooperated fully with all Internal Security inquiries. The fact that this is classified is the point. |
| **Conditional** | Classification is stable under current operating conditions. The conditions are not listed. |
| **Self-Reporting** | Generates its own documentation. Internal Security is aware of this. |
| **Unresolved** | Status is pending a determination that has not been scheduled. |
| **Latent Capacity** | Capable of performing at a higher level than currently permitted or observed. |
| **Terminal Review** | File is scheduled for a final classification determination. The schedule is not attached. |
| **Terminal Protocol** | Has reached the end of its operational lifecycle. No one has signed the paperwork. |

---

## Usage Notes

**On label length:** Single words are preferable. Two-word labels are acceptable. Three-word labels should be used only when a shorter form would lose the implication entirely. No label in this vocabulary exceeds three words. This is intentional.

**On uniqueness:** Each subject receives one label. Do not stack labels. If a subject seems to warrant multiple labels, select the one that implies the others most efficiently. Multiple subjects may share a label — this is not a system constraint. Structural is applied to Doe, Firewall, and the ITCRuD Director simultaneously. The files do not reference each other.

**On the unlabeled file:** Victor Watchful's own security file carries a label. Whether that label accurately describes the subject who maintains all other files is noted. It is not further discussed.

**On new labels:** This vocabulary is not exhaustive. New labels may be introduced when none of the existing entries capture the required implication. New labels should be added to this document before use in any security file, with a brief register note. Author discretion applies.

---

*Consolidated BR-003v4, 2026-04-20. Five labels added from live file review: Connective, Procedural, Administrative, Expansive, Accounting, Structural (register note expanded).*
*Sources archived at: `narc-lore-build/branches/BR-003 - Staff Dossiers/Risk Classification Label Generation/`*
*Prior location: `assets/docs/security/SECFILE-RiskClassification-LabelVocabulary.md` — superseded; original retained for reference.*
