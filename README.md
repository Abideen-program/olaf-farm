# Olaf Farm

Next.js (App Router) + TypeScript + Tailwind v4. Storefront shell with a waitlist.

## Run
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in your Supabase values (optional in development).
3. In Supabase, open the SQL editor and run `supabase/schema.sql`.
4. `npm run dev` then open http://localhost:3000

Without Supabase keys, waitlist sign-ups are logged to the terminal in development and refused in production.
Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only. Never prefix it with NEXT_PUBLIC.
