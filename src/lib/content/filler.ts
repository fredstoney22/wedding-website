/**
 * Important placeholder values (deadlines, contacts, policies, vendor names)
 * that are not yet confirmed in requirements — wrap with `f()` for red-aura UI.
 * Plain Latin ipsum should NOT use `f()`; leave it as normal text.
 *
 * Inline links: use markdown `[label](href)` inside content strings.
 */
export function f(value: string): string {
	return `⟦${value}⟧`;
}

export type TextPart =
	| { type: 'text'; value: string }
	| { type: 'filler'; value: string }
	| { type: 'link'; value: string; href: string }
	| { type: 'bold'; value: string };

const TOKEN_RE = /⟦([\s\S]+?)⟧|\[([^\]]+)\]\(([^)]+)\)|\*\*([\s\S]+?)\*\*/g;

export function parseFillerText(text: string): TextPart[] {
	const parts: TextPart[] = [];
	let last = 0;
	for (const match of text.matchAll(TOKEN_RE)) {
		const index = match.index ?? 0;
		if (index > last) {
			parts.push({ type: 'text', value: text.slice(last, index) });
		}
		if (match[1] !== undefined) {
			parts.push({ type: 'filler', value: match[1] });
		} else if (match[4] !== undefined) {
			parts.push({ type: 'bold', value: match[4] });
		} else {
			parts.push({ type: 'link', value: match[2] ?? '', href: match[3] ?? '' });
		}
		last = index + match[0].length;
	}
	if (last < text.length) {
		parts.push({ type: 'text', value: text.slice(last) });
	}
	return parts.length > 0 ? parts : [{ type: 'text', value: text }];
}

/** True when the whole string is a single filler marker (e.g. listing names). */
export function isFullyFiller(text: string): boolean {
	return /^⟦[\s\S]+⟧$/.test(text);
}

export function unwrapFiller(text: string): string {
	const full = text.match(/^⟦([\s\S]+)⟧$/);
	return full?.[1] ?? text;
}
