# ![NARC Logo](../images/narc-banner.svg)
# IT Procedure – VPN Setup Guide

**Document Owner:** IT Operations  
**Version:** 1.0  
**Date:** YYYY-MM-DD  
**Classification:** INTERNAL USE ONLY  

---

## Purpose

This procedure describes how to set up VPN access for NARC internal resources.

---

## Prerequisites

- Valid NARC employee account
- Approved VPN access request
- Device enrolled in MDM

---

## Procedure

1. Download VPN configuration from [vpn.notarealcompany.enterprises](https://vpn.notarealcompany.enterprises).
2. Import the `.ovpn` file into OpenVPN or WireGuard client.
3. Authenticate using SSO credentials.
4. Verify connection by pinging `hq-gateway.narc.local`.

---

## Troubleshooting

| Symptom | Possible Cause | Resolution |
|--------|----------------|-----------|
| Cannot connect | Expired certificate | Open IT ticket |
| Slow connection | Network congestion | Try another exit node |

---

## Support

Contact IT Support: it-support@notarealcompany.enterprises
