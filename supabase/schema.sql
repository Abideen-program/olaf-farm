create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text,
  contact text not null,
  interest text not null,
  created_at timestamptz not null default now()
);
-- Row level security on with no public policies: only the server (service role key) can read or write.
alter table public.waitlist enable row level security;
