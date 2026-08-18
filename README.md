# Wedding Website — Carolina & Fred

**Live site: [carolina.frederickstoney.com](https://carolina.frederickstoney.com)**

A bilingual (English/Spanish) wedding site with a full RSVP flow, built for a destination wedding in Colombia (July 2027).

## Features

- Fully bilingual site — every page (schedule, travel info, hotels, FAQs, our story) has an `/es` mirror.
- RSVP form (`POST /api/rsvp`) that logs each submission to a Google Sheet via an Apps Script webhook and optionally sends a confirmation email through Resend.
- Content-driven pages: schedule/itinerary, travel + transport logistics between Bogotá and the ceremony, dietary preferences, and a song-request field.
- Countdown, image carousel, and a custom cream/gold visual theme.

## Stack

SvelteKit 2 · Svelte 5 (Runes) · TypeScript · Vercel (hosting) · Google Sheets (Apps Script webhook) · Resend (email)

## Running locally

```sh
npm install
npm run dev
```

RSVP submissions work out of the box (logged server-side); wiring up `GOOGLE_SHEETS_WEBHOOK_URL` and/or `RESEND_API_KEY` in `.env` enables the Sheet row + email notification — see [`scripts/rsvp-google-sheet.gs`](scripts/rsvp-google-sheet.gs) for the Apps Script side.
