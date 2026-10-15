# Sign-in setup

PixelToCloud sign-in uses Supabase Auth and a `public.profiles` table. Customers continue with Google or a phone code. The site does not store passwords.

This repository is a Vite single-page app. It is not a Next.js app, so there is no Next.js middleware or server-component client. The browser keeps the Supabase session, and Postgres row-level security decides which profile a person can read or change.

## 1. Create the Supabase project

1. Create a project at [supabase.com](https://supabase.com).
2. Open Project Settings, then API.
3. Copy the project URL and the `anon` public key.
4. Leave the service-role key in the Supabase dashboard. Do not add it to this site.

## 2. Environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

Set:

```text
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
```

`.env.local` is gitignored. Vite inlines `NEXT_PUBLIC_` values when the site is built, so production builds need the same two variables at build time.

Do not create `NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY` or `VITE_SUPABASE_SERVICE_ROLE_KEY`.

## 3. Google

In Google Cloud Console:

1. Create an OAuth client of type Web application.
2. Add this authorized redirect URI, using the project ref from `NEXT_PUBLIC_SUPABASE_URL`:

```text
https://<project-ref>.supabase.co/auth/v1/callback
```

3. Copy the client ID and client secret.

In Supabase, open Authentication, then Providers, then Google. Enable it and paste the client ID and secret.

In Authentication, then URL configuration, set the site URL to the public site, for example `https://pixeltocloud.com`. Add these redirect URLs:

```text
http://localhost:5173/auth/callback
https://pixeltocloud.com/auth/callback
```

The site sends people back to `/auth/callback` on the current origin. Supabase must allow that address. The app exchanges the returned code for a session. It does not read Google access tokens itself.

## 4. Phone codes

In Supabase, open Authentication, then Providers, then Phone. Enable it and connect an SMS provider there (Twilio, MessageBird, Vonage, or Textlocal). Provider credentials stay in the Supabase dashboard.

Phone numbers are sent in E.164 form, such as `+919876543210`. The sign-in form offers India, the United States, the United Kingdom, the UAE, Singapore, Australia, and Canada. India is the default.

Supabase sends the code and checks it. This site does not store codes. The form waits 30 seconds before it offers another code. Supabase also rate-limits sends. Turn on the captcha protection in Authentication, then Attack Protection, when you are ready to add a site key.

For local testing, Supabase can use test phone numbers under Authentication, then Providers, then Phone. Those numbers do not send a real text.

## 5. Database

In the Supabase SQL editor, run:

```text
supabase/migrations/20261003120000_profiles.sql
```

That creates `public.profiles`, turns on row-level security, and adds a trigger so a profile row is created when `auth.users` gains a row. A signed-in person can read and update only the row whose `id` matches `auth.uid()`. There is no policy that lets them delete a profile or read someone else's. They cannot change the phone column from the browser. Email stays on the auth user and is read-only in the profile form.

Registered customers are visible to the studio in the Supabase table editor, which is the place to follow up. The browser never receives a key that can list every user.

## 6. Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173/login`.

Public pages stay public: `/`, `/services`, `/work`, `/about`, `/contact`, `/labs`, `/privacy`, `/terms`, `/login`, and `/auth/*`.

`/dashboard`, `/dashboard/profile`, `/dashboard/projects`, `/dashboard/enquiries`, and `/dashboard/settings` require a session. A signed-out visit goes to `/login?redirect=` and returns there after sign-in. Only paths that start with a single `/` are accepted.

`/sign-in` and `/register` redirect to `/login`.

## 7. Production

Build with the two public variables set:

```bash
npm run build
```

Host the `dist` folder as a single-page app so `/login`, `/auth/callback`, and `/dashboard` serve `index.html`. On Vercel, the existing SPA rewrite does that. On GitHub Pages, the `404.html` copy does that. The anon key is public by design. Row-level security is what keeps profiles private.

Add the production `/auth/callback` URL in Supabase before inviting customers.

## 8. Troubleshooting

- Google returns to `/login` or shows "Google sign-in could not be completed." Check that the Google redirect URI is `https://<project-ref>.supabase.co/auth/v1/callback` and that the site's `/auth/callback` URL is allowed in Supabase.
- "Please enter a valid phone number." The number does not match the selected country.
- "We couldn't send the text." The code was never delivered. For Twilio, open Trust Hub and finish the primary compliance profile. Error 20003 means that profile is not approved yet, so Twilio refuses the message.
- "The verification code is incorrect or has expired." Request another code and enter the new one. The message body in Supabase must contain `{{ .Code }}` so the text shows the code Supabase expects.
- "Too many attempts." Wait a few minutes. The SMS provider and Supabase both limit how often a code can be sent.
- Profile save fails after sign-in. Run the SQL migration. The signed-in user can update only `full_name`, `company_name`, `country`, and `avatar_url`.
- The login page says sign-in is not available. `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` were missing when Vite started or when the production bundle was built.
