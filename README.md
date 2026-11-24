# Muhammad Asim Shahzad — Portfolio Website

A zero-build, multi-template portfolio website and live Admin CMS for **Muhammad Asim Shahzad** (Physics & Mathematics Teacher, BS Physics), powered by **Vercel** and **Supabase**.

- **Client Email / Admin Login:** `asim190305@gmail.com`
- **Location:** Sargodha, Punjab, Pakistan
- **Phone / WhatsApp:** `+92 321 3207141`

## Repository Structure

```text
├── index.html                           # Public portfolio website (10 templates + 15 themes)
├── admin.html                           # Live Admin Dashboard (CMS, inbox, templates, themes, preview)
├── site-config.js                       # Client credentials & default portfolio content
├── profile.jpg                          # Cropped portrait photo
├── vercel.json                          # Clean URL routing (/admin) & security headers
├── README.md                            # Launch guide
└── supabase/
    ├── setup.sql                        # Database tables, RLS policies (asim190305@gmail.com) & storage
    └── functions/
        └── social-feed/
            └── index.ts                 # Optional Edge Function for auto YouTube/IG/FB feeds
```

---

## Launch Checklist

### 1. Create Supabase Project (`asim190305@gmail.com`)
1. Sign in to [supabase.com](https://supabase.com/) with **`asim190305@gmail.com`** → **New Project**.
2. Open **Project Settings → API** and copy:
   - **Project URL** (`SUPABASE_URL`)
   - **anon public key** (`SUPABASE_ANON_KEY`)
3. Paste those two values into:
   - `site-config.js` (lines 8–9)
   - `index.html` (`SUPABASE_URL` and `SUPABASE_ANON_KEY`)
4. Open **SQL Editor → New Query**, paste `supabase/setup.sql`, and click **Run** (already pre-configured for `asim190305@gmail.com`).
5. Open **Authentication → Users → Add User**:
   - Email: `asim190305@gmail.com`
   - Password: choose a strong password
   - Tick **Auto Confirm User** → **Create user**.

### 2. Deploy to GitHub & Vercel (`asim190305@gmail.com`)
1. Push this folder to a new GitHub repository.
2. Sign in to [vercel.com](https://vercel.com/) with **`asim190305@gmail.com`** → **Add New Project** → import the GitHub repo → click **Deploy**.
3. Open `https://<your-project>.vercel.app/admin`, log in with `asim190305@gmail.com`, choose a template/theme if desired, and click **Publish**.
4. Submit one test message on the Contact Form and click the **FormSubmit activation link** sent to `asim190305@gmail.com` so future form inquiries are forwarded directly to Gmail.
