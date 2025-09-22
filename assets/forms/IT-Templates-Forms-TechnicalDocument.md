# ![NARC Logo](../images/narc-logo.svg)
# Technical Documentation Template

**Document Title:** [System / Service Name]  
**Document Owner:** [Team or Person]  
**Version:** 1.0  
**Date:** YYYY-MM-DD  
**Classification:** Internal Use Only  

---

## 1. Overview
Explain purpose and scope.

## 2. System Architecture
![System Diagram Placeholder](../images/system-diagram-placeholder.svg)

## 3. Network Details
| Component | Hostname | IP Address | Port(s) | Notes |
|----------|----------|-----------|--------|------|
| Example | svc-web01.hq.prod.narc.enterprises | 10.0.0.25 | 443 | Web Service |

## 4. Installation & Deployment
1. Clone repo
2. Install dependencies
3. Configure
4. Start service

## 5. Configuration
```yaml
service:
  port: 443
  log_level: INFO
database:
  host: db-main01.hq.prod.narc.enterprises
  port: 5432
  user: serviceuser
