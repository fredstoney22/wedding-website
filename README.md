# Wedding website

SvelteKit 2 + Svelte 5 (Runes), deployed on Vercel — cream/gold invitation site for Carolina & Fred (July 2027).

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## RSVP (optional)

The form posts to `POST /api/rsvp`. Configure a Google Sheet webhook and/or email. Without either, submissions are accepted and logged on the server.

### Google Sheet (recommended)

1. Create a Sheet with a tab named `RSVPs` and this header row:

   `Timestamp | Name | Email | Phone | Attend wedding | Attend welcome | Transport Bogota | Transport ceremony | Dietary | Songs`

2. **Extensions → Apps Script**, paste [`scripts/rsvp-google-sheet.gs`](scripts/rsvp-google-sheet.gs), Save.

3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Copy the web app URL

4. Set `GOOGLE_SHEETS_WEBHOOK_URL` to that URL in `.env` and Vercel.

### Email (optional ping)

| Variable | Purpose |
|----------|---------|
| `GOOGLE_SHEETS_WEBHOOK_URL` | Apps Script web app URL (appends a row per RSVP) |
| `RSVP_TO_EMAIL` | Inbox that receives RSVPs |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key |
| `RSVP_FROM_EMAIL` | Optional From header (defaults to Resend onboarding address) |

## Fonts

Display / script / body roles currently use Google Fonts substitutes (Cormorant Garamond, Great Vibes, DM Sans). Drop licensed **New Icon**, **Pynion Script**, and **TT Hoves** files into `static/fonts/` and update `@font-face` rules in `src/lib/styles/site.css` when available.

## Deploy to Vercel

```sh
npx vercel
```

Or connect the repo in the [Vercel dashboard](https://vercel.com/new) and use the default SvelteKit build settings.
