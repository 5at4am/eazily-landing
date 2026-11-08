# Eazily Landing

Public marketing / landing site for **eazily.com**.

## What this is

A lightweight, dependency-free static site (HTML + CSS + a small JS file) built for
Hostinger shared hosting or any static host. No build step required — the files in
this repo are ready to upload.

## Structure

```
index.html          Landing page (all content)
assets/styles.css   Design system + layout
assets/app.js       Progressive enhancements (nav, waitlist, reveal)
```

## Deploy (Hostinger shared hosting)

1. Open the **File Manager** for your `eazily.com` website in hPanel.
2. Go to **`public_html`**.
3. Upload the **contents of this repo** (`index.html` + `assets/`) into `public_html`.
4. Enable free SSL and force HTTPS in hPanel (Security → SSL).
5. Visit `https://eazily.com` to verify.

No server-side runtime or environment variables are needed.

## Related repositories (one repo per website)

| Repo | Site | Domain |
|---|---|---|
| `eazily-landing` | This landing page | `eazily.com` |
| `eazily-web` | Admin console | `admin.eazily.com` |
| `eazily-react` | Customer/partner app | `eazily.com` (later) |

## Notes

- The waitlist form is front-end only and currently just confirms locally.
  Connect it to your email/CRM endpoint before launch.
- Update the placeholder `admin.eazily.com` links if your admin host differs.
- `partners@eazily.com` / `contact@eazily.com` addresses are placeholders —
  create the mailboxes on your Hostinger plan (hPanel → Emails).
