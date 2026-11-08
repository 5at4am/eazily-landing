-- Waitlist signups for the public landing site (eazily.com).
-- Inserts are allowed for anonymous visitors; nothing can be read or modified
-- without elevated access, so the list is review-only until a backend/CRM is wired.

create table if not exists public.waitlist_signups (
  id         bigint generated always as identity primary key,
  email      text not null unique,
  source     text not null default 'landing',
  created_at timestamptz not null default now(),
  constraint waitlist_email_format check (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')
);

alter table public.waitlist_signups enable row level security;

drop policy if exists waitlist_insert_anon on public.waitlist_signups;
create policy waitlist_insert_anon
  on public.waitlist_signups
  for insert
  to anon
  with check (true);

-- No select/update/delete grants for anon or authenticated; review happens
-- through elevated server access only.
grant insert on public.waitlist_signups to anon;
