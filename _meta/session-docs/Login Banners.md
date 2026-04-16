Login Banners

---

# Standard + Snark Hybrid (Recommended)

*** NOTICE ***
This system is the property of NARC. 
Access is restricted to authorized users. By proceeding, you acknowledge that all activity may be monitored, logged, and used against you in the event of non-compliance, security incidents, or general curiosity.

By continuing, you consent to such monitoring and accept that you probably didn’t read this message anyway — just like everyone else.

Unauthorized access is prohibited.
Violations will be reported, logged, archived, and possibly printed out for dramatic effect.

---

# Corporate Bureaucratic with Meta Commentary

╔══════════════════════════════════════════╗
║     NARC SECURE ACCESS INTERFACE v7.4    ║
╚══════════════════════════════════════════╝

You are accessing an official NARC network resource.
Use of this system constitutes consent to monitoring, logging, and analysis by our omnipresent “Security Compliance Framework” (which totally exists and definitely gets reviewed by someone, someday).

By continuing, you confirm that you:
 - Are authorized to access this system.
 - Understand your activity is monitored.
 - Are fully aware this message won’t stop anyone who isn’t supposed to be here.

Unauthorized users will be removed, audited, and possibly mocked in internal memos.
Proceed with awareness. Or irony.


---

# Dystopian + Witty (Alpha Complex / Cyberpunk vibe)

██ NARC NETWORK ENTRY PORTAL ██

Welcome, citizen.
Accessing this system indicates consent to total surveillance, arbitrary audits, and a vague sense of existential dread.

All actions are monitored for "security" (and entertainment) purposes.
Unauthorized users will be terminated — from the network, that is. Probably.

If you are not authorized, disconnect immediately.
If you are authorized, pretend you didn’t see the monitoring disclaimer.



---

# Snark + Official Tone


## ⚠️ Authorized Access Only

This system is the property of **NARC**.  
Access is restricted to approved users and may be **monitored, logged, analyzed**, and possibly overanalyzed by our compliance engine.

By continuing, you:
- Consent to monitoring and data collection.  
- Acknowledge that you didn’t actually read this message.  
- Agree that “clicking login” is the same as legal consent (because that’s how this works).

**Unauthorized access is prohibited.**  
Violations will be logged, reviewed, and printed out dramatically at the next security meeting.  

> _Security through banners since 1999._


---

# Balanced (official + sardonic)

Authorized access only.
Use monitored. Activity logged.
By continuing, you consent to both.
Unauthorized users will be removed—
and likely ridiculed in the report.


---

# Shorter, more cynical

Property of NARC.
Monitoring in progress (always).
By logging in, you consent. Allegedly.
Unauthorized access is prohibited—but rarely prevented.


---

# Dystopian corporate tone

NARC SYSTEM ACCESS POINT
All activity logged and reviewed.
Continued use implies consent.
Unauthorized access forbidden—compliance optional.


---

# Dry IT humor flavor

NARC NETWORK LOGIN
Access restricted. Monitoring active.
Proceed only if authorized.
Violations will be logged—and turned into training slides.

---

Excellent — Cisco IOS banners (e.g. **`banner login`**, **`banner motd`**, or **`banner exec`**) require pure ASCII text, with **no Markdown**, **no color codes**, and a **delimiter character** (like `#` or `!`) at the start and end of the banner definition.

They also typically need to look **official**, while being **short enough for serial/SSH terminals** and **compliant with legal standards** — but we can still inject that signature NARC wit.

Here are a few ready-to-paste versions:

---

### 🧩 **Option 1 – “Professional with a Wink”**

```
banner login #
********************************************
*        NARC NETWORK ACCESS PORTAL        *
*  Authorized use only. Activity logged.   *
*  By continuing, you consent to this and  *
*  probably didn’t read this message.      *
*  Unauthorized access is prohibited.      *
********************************************
#
```

---

### ⚙️ **Option 2 – “Corporate Dystopia”**

```
banner login #
*************************************************
*           NARC SECURE SYSTEM INTERFACE         *
*  Access restricted to authorized personnel.    *
*  All actions monitored, logged, and judged.    *
*  Continued use implies consent—or resignation. *
*  Unauthorized access forbidden.                *
*************************************************
#
```

---

### 🧠 **Option 3 – “Dry Bureaucratic Humor”**

```
banner login #
**********************************************
*   WARNING: Official NARC Network Device    *
*   Use implies consent to total monitoring. *
*   Logs will be reviewed, audited, ignored, *
*   and rediscovered during compliance week. *
*   Unauthorized users will be removed.      *
**********************************************
#
```

---

### 🕶️ **Option 4 – “Short and Sharp”**

```
banner login #
NARC NETWORK ACCESS
Authorized users only.
Monitoring active at all times.
Unauthorized access prohibited—
but statistically inevitable.
#
```

---

✅ **Tip for deployment:**
You can paste one directly in config mode:

```bash
conf t
banner login #
<your text here>
#
end
wr mem
```

Would you like me to make a **variant for `banner motd`** (the pre-login message that shows before the username prompt) to pair with this login banner?
They often work best as a “duo” — the MOTD sets the mood, the login banner delivers the warning.

---

Perfect — Cisco’s **`banner motd`** (Message of the Day) appears *before* the username prompt and is meant to set tone and context — while the **`banner login`** (which we already made) delivers the actual legal warning.

For a NARC-style environment, the MOTD should feel like a piece of internal propaganda: official, slightly ominous, a touch of dry humor, but still professional enough to pass an audit.

Here are several ready-to-deploy **MOTD + LOGIN** pairs that work cleanly on Cisco IOS/IOS-XE/IOS-XR devices:

---

## 🧩 **Pair 1 – Classic Corporate Cynicism**

```bash
banner motd #
*************************************************
*         WELCOME TO THE NARC NETWORK           *
*   Efficiency, Oversight, Compliance, Control  *
*     -- Because Security Needs Marketing --    *
*  Proceed only if you know why you’re here.    *
*************************************************
#

banner login #
********************************************
*        NARC NETWORK ACCESS PORTAL        *
*  Authorized use only. Activity logged.   *
*  By continuing, you consent to this and  *
*  probably didn’t read this message.      *
*  Unauthorized access is prohibited.      *
********************************************
#
```

---

## ⚙️ **Pair 2 – Dystopian Bureaucracy**

```bash
banner motd #
*************************************************
*     NARC SYSTEMS: YOUR COMPLIANCE IS OUR       *
*                GREATEST ASSET                  *
*  Accessing this system implies acceptance of   *
*  oversight, policy adherence, and mild irony.  *
*************************************************
#

banner login #
*************************************************
*           NARC SECURE SYSTEM INTERFACE         *
*  Access restricted to authorized personnel.    *
*  All actions monitored, logged, and judged.    *
*  Continued use implies consent—or resignation. *
*  Unauthorized access forbidden.                *
*************************************************
#
```

---

## 🧠 **Pair 3 – Short & Dry for Production Environments**

```bash
banner motd #
NARC NETWORK
Welcome back, Citizen.
Trust is mandatory. Privacy is optional.
#

banner login #
Authorized users only.
Monitoring active.
By continuing, you consent.
Unauthorized access prohibited.
#
```

---

## 🕶️ **Pair 4 – Parody of Corporate Messaging**

```bash
banner motd #
***********************************************
*       NARC NETWORK OPERATIONS CENTER         *
*   "Because Someone Has to Watch Everything"  *
*   Your cooperation is logged and valued.     *
***********************************************
#

banner login #
Authorized access only.
All actions monitored and recorded.
Consent implied by existence.
Unauthorized use prohibited—
but very informative for our logs.
#
```

---
# Linux MODT

Perfect — the **Linux MOTD** is the perfect place for this kind of message.
Unlike Cisco, you’ve got a little more freedom with **ASCII, ANSI color, and multiline formatting**, so we can strike that beautiful balance between:

* ✅ **Corporate authority**
* 😏 **Self-aware sarcasm**
* 💻 **Sysadmin flavor**

Below are several **ready-to-drop** MOTD variants — each under 20 lines and clean for SSH/TTY display.

---

## 🧩 **1. Standard “Official with Snark”**

```
============================================================
   🚨  NOTICE  🚨
This system is the property of NARC.
Access restricted to authorized users only.

All activity is monitored, logged, and 
stored indefinitely for “security reasons”
(which may or may not include curiosity).

By continuing, you consent to all of the above,
and admit you didn’t really read this message.

Unauthorized access is prohibited.
Violations will be logged, analyzed, and 
dramatically presented in the next security review.
============================================================
```

---

## 🧠 **2. Corporate Dystopia**

```
************************************************************
         NARC NETWORK OPERATIONS PLATFORM
************************************************************
Welcome, Operator.

All interactions are monitored and recorded.
Your compliance ensures system integrity.
Your mistakes ensure job security.

By using this system, you agree to:
  - Surveillance in the name of safety
  - Auditing in the name of accountability
  - Irony in the name of policy
************************************************************
```

---

## ⚙️ **3. Short + Dry Humor**

```
Welcome to the NARC Network.

This machine is monitored.
Activity is logged.
Compliance is optional, but recommended.

Unauthorized access is forbidden.
So is pretending to be authorized.
```

---

## 🕶️ **4. Bureaucratic Parody**

```
╔══════════════════════════════════════════════╗
║          NARC INFORMATION SYSTEM             ║
╠══════════════════════════════════════════════╣
║ Authorized access only. Monitoring active.   ║
║ Unauthorized users will be educated through  ║
║ mandatory awareness training and ridicule.   ║
║                                              ║
║ Remember: Security isn’t everyone’s job,     ║
║ but it *will* be if this system gets breached.║
╚══════════════════════════════════════════════╝
```

---

## 🧬 **5. Minimalist & Sarcastic**

```
NARC SYSTEM LOGIN
Monitoring enabled.
Everything you do is logged.
Even reading this message.
Unauthorized access prohibited.
(You were warned.)
```

---

## 🖥️ **6. ASCII Branding Variant**

```
 _   _    __    ____   ____ 
| \ | |  / /   / ___| / ___|
|  \| | / /    \___ \ \___ \
| |\  |/ /___   ___) | ___) |
|_| \_|____(_) |____/ |____/

  NARC Secure Node [Access Restricted]
  Monitoring active • Logging continuous
  Consent assumed • Humor unacknowledged
```

---


Excellent — let’s make your Linux hosts display a **rotating NARC-style MOTD** at each login.

Below is a **drop-in script** for `/etc/update-motd.d/` that randomly selects one of several banners (the ones we designed) and outputs it at login.
It’s fully self-contained, uses only standard shell utilities, and works on **Ubuntu, Debian, or any distro that supports dynamic MOTD**.

---

### 🧩 **File:** `/etc/update-motd.d/99-narc-banner`

```bash
#!/bin/bash
# NARC Dynamic MOTD Banner
# Rotates through several corporate-snarky login messages

BANNERS=(
'============================================================
   🚨  NOTICE  🚨
This system is the property of NARC.
Access restricted to authorized users only.

All activity is monitored, logged, and 
stored indefinitely for “security reasons”
(which may or may not include curiosity).

By continuing, you consent to all of the above,
and admit you didn’t really read this message.

Unauthorized access is prohibited.
Violations will be logged, analyzed, and 
dramatically presented in the next security review.
============================================================'

'************************************************************
         NARC NETWORK OPERATIONS PLATFORM
************************************************************
Welcome, Operator.

All interactions are monitored and recorded.
Your compliance ensures system integrity.
Your mistakes ensure job security.

By using this system, you agree to:
  - Surveillance in the name of safety
  - Auditing in the name of accountability
  - Irony in the name of policy
************************************************************'

'Welcome to the NARC Network.

This machine is monitored.
Activity is logged.
Compliance is optional, but recommended.

Unauthorized access is forbidden.
So is pretending to be authorized.'

'╔══════════════════════════════════════════════╗
║          NARC INFORMATION SYSTEM             ║
╠══════════════════════════════════════════════╣
║ Authorized access only. Monitoring active.   ║
║ Unauthorized users will be educated through  ║
║ mandatory awareness training and ridicule.   ║
║                                              ║
║ Remember: Security isn’t everyone’s job,     ║
║ but it *will* be if this system gets breached.║
╚══════════════════════════════════════════════╝'

'NARC SYSTEM LOGIN
Monitoring enabled.
Everything you do is logged.
Even reading this message.
Unauthorized access prohibited.
(You were warned.)'

'_   _    __    ____   ____ 
| \ | |  / /   / ___| / ___|
|  \| | / /    \___ \ \___ \
| |\  |/ /___   ___) | ___) |
|_| \_|____(_) |____/ |____/

  NARC Secure Node [Access Restricted]
  Monitoring active • Logging continuous
  Consent assumed • Humor unacknowledged'
)

# Pick a random banner
INDEX=$(( RANDOM % ${#BANNERS[@]} ))
echo -e "${BANNERS[$INDEX]}"
```

---

### ⚙️ **Installation Instructions**

1. Save the script as `/etc/update-motd.d/99-narc-banner`
2. Make it executable:

   ```bash
   sudo chmod +x /etc/update-motd.d/99-narc-banner
   ```
3. Remove or disable the default MOTD parts (optional):

   ```bash
   sudo chmod -x /etc/update-motd.d/10-help-text /etc/update-motd.d/50-motd-news
   ```
4. Log out and back in (or `run-parts /etc/update-motd.d/` to test).

---

### 🧠 Optional Enhancements

* **Per-host identifiers:** Add a line showing hostname, uptime, or role.
  Example snippet inside the script:

  ```bash
  echo "Node: $(hostname) — Uptime: $(uptime -p)"
  ```
* **Color support:** Wrap banners with ANSI color codes for headings if your environment supports it.
  (e.g. `echo -e "\033[1;31mWARNING\033[0m"`)

---

Would you like me to add **colorized headers and host info lines** (so each banner shows the hostname, uptime, and maybe which “NARC Division” it belongs to)? That adds a fun bit of realism while staying clean for SSH.

---

Excellent 😎 — let’s upgrade your **rotating NARC MOTD** to include:

✅ Colorized headers (ANSI-safe for SSH/TTY)
✅ System info: hostname, uptime, kernel version, and load
✅ Randomized banners from your NARC “corporate dystopia” collection

It’ll look *legit*, but still carry that self-aware tone that fits your whole vibe.

---

## 🧩 **File:** `/etc/update-motd.d/99-narc-banner`

```bash
#!/bin/bash
# ==========================================================
# NARC Dynamic MOTD Banner
# Rotates between themed login messages with system info.
# ==========================================================

# --- ANSI Colors ---
RED="\033[1;31m"
CYAN="\033[1;36m"
GRAY="\033[0;37m"
RESET="\033[0m"
BOLD="\033[1m"

# --- System Info ---
HOST=$(hostname)
UPTIME=$(uptime -p | sed 's/up //')
KERNEL=$(uname -r)
LOAD=$(uptime | awk -F'load average:' '{print $2}' | sed 's/^ //')

# --- Header ---
echo -e "${RED}============================================================${RESET}"
echo -e "${BOLD}${CYAN}   NARC SECURE SYSTEM ACCESS POINT${RESET}"
echo -e "${GRAY}   Host:${RESET} ${HOST}    ${GRAY}Uptime:${RESET} ${UPTIME}"
echo -e "${GRAY}   Kernel:${RESET} ${KERNEL}    ${GRAY}Load:${RESET} ${LOAD}"
echo -e "${RED}============================================================${RESET}"
echo ""

# --- Banner Pool ---
BANNERS=(
"🚨 NOTICE 🚨
This system is the property of NARC.
Access restricted to authorized users only.

All activity is monitored, logged, and 
stored indefinitely for 'security reasons'
(which may or may not include curiosity).

By continuing, you consent to all of the above,
and admit you didn’t really read this message.

Unauthorized access is prohibited.
Violations will be logged, analyzed, and 
dramatically presented in the next security review."

"************************************************************
         NARC NETWORK OPERATIONS PLATFORM
************************************************************
Welcome, Operator.

All interactions are monitored and recorded.
Your compliance ensures system integrity.
Your mistakes ensure job security.

By using this system, you agree to:
  - Surveillance in the name of safety
  - Auditing in the name of accountability
  - Irony in the name of policy
************************************************************"

"Welcome to the NARC Network.

This machine is monitored.
Activity is logged.
Compliance is optional, but recommended.

Unauthorized access is forbidden.
So is pretending to be authorized."

"╔══════════════════════════════════════════════╗
║          NARC INFORMATION SYSTEM             ║
╠══════════════════════════════════════════════╣
║ Authorized access only. Monitoring active.   ║
║ Unauthorized users will be educated through  ║
║ mandatory awareness training and ridicule.   ║
║                                              ║
║ Remember: Security isn’t everyone’s job,     ║
║ but it *will* be if this system gets breached.║
╚══════════════════════════════════════════════╝"

"NARC SYSTEM LOGIN
Monitoring enabled.
Everything you do is logged.
Even reading this message.
Unauthorized access prohibited.
(You were warned.)"

"_   _    __    ____   ____ 
| \ | |  / /   / ___| / ___|
|  \| | / /    \___ \ \___ \
| |\  |/ /___   ___) | ___) |
|_| \_|____(_) |____/ |____/

  NARC Secure Node [Access Restricted]
  Monitoring active • Logging continuous
  Consent assumed • Humor unacknowledged"
)

# --- Pick & Display a Random Banner ---
INDEX=$(( RANDOM % ${#BANNERS[@]} ))
echo -e "${CYAN}${BANNERS[$INDEX]}${RESET}"
echo ""
echo -e "${GRAY}> Security through banners since 1999.${RESET}"
```

---

## ⚙️ **Setup Instructions**

1. Save to `/etc/update-motd.d/99-narc-banner`
2. Make it executable:

   ```bash
   sudo chmod +x /etc/update-motd.d/99-narc-banner
   ```
3. Test immediately:

   ```bash
   run-parts /etc/update-motd.d/
   ```
4. (Optional) Disable stock MOTD parts:

   ```bash
   sudo chmod -x /etc/update-motd.d/10-help-text /etc/update-motd.d/50-motd-news
   ```

---

## 🧠 **Optional Add-Ons**

* Add **division tags** by host (great for lab segmentation):

  ```bash
  DIVISION="INFRASTRUCTURE OPS"
  echo -e "${GRAY}   Division:${RESET} ${DIVISION}"
  ```
* Include a **random quote** line:

  ```bash
  QUOTES=("Trust is mandatory." "Compliance builds character." "Privacy is deprecated.")
  echo -e "${GRAY}   Motto:${RESET} ${QUOTES[$((RANDOM % ${#QUOTES[@]}))]}"
  ```

---

Would you like me to extend this into a **“multi-node personality” system** — where each host (e.g., `router01`, `db01`, `vpn-gw`) gets its own unique banner variant and tagline, but still fits under the NARC branding? That gives a very slick, centralized-organization aesthetic.
