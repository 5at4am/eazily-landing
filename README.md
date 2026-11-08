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
assets/config.js    Runtime config (git-ignored — create from config.example.js)
assets/config.example.js  Template for the config above
db/                 Supabase migration(s) for the landing site
```

## Deploy (Hostinger shared hosting)

1. Create `assets/config.js` from `assets/config.example.js` and fill in your
   Supabase values (URL + publishable key). This file is git-ignored.
2. Open the **File Manager** for your `eazily.com` website in hPanel.
3. Go to **`public_html`**.
4. Upload the **contents of this repo** (`index.html` + `assets/`) into `public_html`.
5. Enable free SSL and force HTTPS in hPanel (Security → SSL).
6. Visit `https://eazily.com` to verify.

No build step or server-side runtime is required.

## Supabase setup (one-time)

Apply `db/20261108_waitlist_signups.sql` to your Supabase project. It creates a
`waitlist_signups` table with row-level security: anonymous visitors can **only
insert** an email; nothing can be read or changed without elevated access.
Reach the list later through the Supabase dashboard or an elevated API.

## Related repositories (one repo per website)

| Repo | Site | Domain |
|---|---|---|
| `eazily-landing` | This landing page | `eazily.com` |
| `eazily-web` | Admin console | `admin.eazily.com` |
| `eazily-react` | Customer/partner app | `eazily.com` (later) |

## Notes

- The waitlist form posts to your Supabase `waitlist_signups` table (via
  `assets/config.js`). If no config is present it gracefully falls back to a
  local confirmation.
- Update the placeholder `admin.eazily.com` links if your admin host differs.
- `partners@eazily.com` / `contact@eazily.com` addresses are placeholders —
  create the mailboxes on your Hostinger plan (hPanel → Emails).
