/**
 * Google Apps Script for wedding RSVP → Sheet.
 *
 * Setup:
 * 1. Create a Google Sheet. Row 1 headers (exact order):
 *    Timestamp | Name | Email | Phone | Attend wedding | Attend welcome |
 *    Transport Bogota | Transport ceremony | Dietary | Songs
 * 2. Extensions → Apps Script → paste this file → Save
 * 3. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the web app URL into GOOGLE_SHEETS_WEBHOOK_URL (.env / Vercel)
 */

const SHEET_NAME = 'RSVPs'; // rename if your tab is different

function doPost(e) {
	try {
		const data = JSON.parse(e.postData.contents);
		const ss = SpreadsheetApp.getActiveSpreadsheet();
		const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

		sheet.appendRow([
			data.submittedAt || new Date().toISOString(),
			data.name || '',
			data.email || '',
			data.phone || '',
			data.attendWedding || '',
			data.attendWelcome || '',
			data.transportBogota || '',
			data.transportCeremony || '',
			data.dietary || '',
			data.songs || ''
		]);

		return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
			ContentService.MimeType.JSON
		);
	} catch (err) {
		return ContentService.createTextOutput(
			JSON.stringify({ ok: false, error: String(err) })
		).setMimeType(ContentService.MimeType.JSON);
	}
}

/** Optional: open the web app URL in a browser to confirm the deployment is live. */
function doGet() {
	return ContentService.createTextOutput('RSVP webhook OK');
}
