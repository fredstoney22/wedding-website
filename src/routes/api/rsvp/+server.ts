import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const REQUIRED = [
	'name',
	'email',
	'phone',
	'attendWedding',
	'attendWelcome',
	'transportBogota',
	'transportCeremony',
	'dietary',
	'songs'
] as const;

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

export const POST: RequestHandler = async ({ request }) => {
	let body: Record<string, unknown>;
	try {
		body = (await request.json()) as Record<string, unknown>;
	} catch {
		return json({ error: 'Invalid JSON body.' }, { status: 400 });
	}

	const payload: Record<string, string> = {};
	for (const key of REQUIRED) {
		const value = body[key];
		if (typeof value !== 'string' || !value.trim()) {
			return json({ error: `Missing required field: ${key}` }, { status: 400 });
		}
		payload[key] = value.trim();
	}

	const submittedAt = new Date().toISOString();
	const sheetPayload = { ...payload, submittedAt };

	const sheetUrl = env.GOOGLE_SHEETS_WEBHOOK_URL;
	const to = env.RSVP_TO_EMAIL;
	const apiKey = env.RESEND_API_KEY;
	const from = env.RSVP_FROM_EMAIL ?? 'RSVP <onboarding@resend.dev>';

	if (!sheetUrl && !(to && apiKey)) {
		console.info('[rsvp] received (no sheet or email configured)', sheetPayload);
		return json({
			ok: true,
			message:
				'RSVP recorded. Configure GOOGLE_SHEETS_WEBHOOK_URL and/or RSVP_TO_EMAIL + RESEND_API_KEY.'
		});
	}

	if (sheetUrl) {
		const sheetRes = await fetch(sheetUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(sheetPayload),
			redirect: 'follow'
		});

		if (!sheetRes.ok) {
			const detail = await sheetRes.text();
			console.error('[rsvp] Google Sheets webhook error', sheetRes.status, detail);
			return json(
				{ error: 'Could not save RSVP to the spreadsheet. Please try again later.' },
				{ status: 502 }
			);
		}
	}

	if (to && apiKey) {
		const rows = Object.entries(payload)
			.map(
				([k, v]) =>
					`<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`
			)
			.join('');

		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from,
				to: [to],
				subject: `Wedding RSVP: ${payload.name}`,
				html: `<h2>New RSVP</h2><table>${rows}</table>`
			})
		});

		if (!res.ok) {
			const detail = await res.text();
			console.error('[rsvp] Resend error', detail);
			// Sheet write already succeeded — don't fail the guest if email alone fails
			if (!sheetUrl) {
				return json(
					{ error: 'Could not send RSVP email. Please try again later.' },
					{ status: 502 }
				);
			}
		}
	}

	return json({ ok: true, message: 'RSVP sent.' });
};
