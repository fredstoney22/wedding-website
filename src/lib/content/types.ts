export type ImageRef = {
	src: string;
	alt: string;
	aspect?: 'landscape' | 'portrait' | 'square';
};

export type NavItem = {
	label: string;
	href: string;
	children?: NavItem[];
};

export type InlineLink = {
	label: string;
	href: string;
};

export type ContentSection = {
	heading: string;
	level?: 3 | 4 | 5 | 6;
	paragraphs?: string[];
	list?: string[];
	links?: InlineLink[];
	children?: ContentSection[];
};

export type StorySection = {
	heading?: string;
	paragraphs: string[];
	images?: ImageRef[];
};

export type FormField = {
	name: string;
	label: string;
	type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
	placeholder?: string;
	required?: boolean;
	options?: string[];
};

export type ScheduleEvent = {
	title: string;
	paragraphs: string[];
	links?: InlineLink[];
};

export type ScheduleDay = {
	date: string;
	events: ScheduleEvent[];
	location?: { heading: string; description: string };
};

export type ListingItem = {
	name: string;
	href?: string;
};

export type ListingTier = {
	price: string;
	items: ListingItem[];
};

export type ListingGroup = {
	heading: string;
	intro?: string[];
	tiers?: ListingTier[];
	items?: ListingItem[];
	attractions?: AttractionItem[];
	links?: InlineLink[];
};

export type AttractionItem = {
	heading: string;
	level?: 4 | 5;
	paragraphs: string[];
	links?: InlineLink[];
};

export type FaqItem = {
	question: string;
	paragraphs?: string[];
	list?: string[];
	links?: InlineLink[];
};

export type HomeDetails = {
	date: string;
	time: string;
	venue: string;
};

export type HomePage = {
	type: 'home';
	title: string;
	hero?: ImageRef;
	carousel?: ImageRef[];
	paragraphs: string[];
	countdownTarget: string;
	details?: HomeDetails;
};

export type StoryPage = {
	type: 'story';
	title: string;
	sections: StorySection[];
};

export type RsvpPage = {
	type: 'rsvp';
	title: string;
	intro: string[];
	fields: FormField[];
	submitLabel: string;
	submitMessage: string;
};

export type SchedulePage = {
	type: 'schedule';
	title: string;
	days: ScheduleDay[];
	mapNote?: string;
};

export type SectionsPage = {
	type: 'sections';
	title: string;
	intro?: string[];
	sections: ContentSection[];
};

export type ListingsPage = {
	type: 'listings';
	title: string;
	intro: string[];
	groups: ListingGroup[];
};

export type AttractionsPage = {
	type: 'attractions';
	title: string;
	intro: string[];
	groups: ListingGroup[];
};

export type CitySection = {
	heading: string;
	/** When true, render heading in script style (Pynion role). */
	scriptHeading?: boolean;
	/** Optional region label above the city (e.g. Beach side). */
	region?: string;
	paragraphs: string[];
	image?: ImageRef;
};

export type ColombiaPage = {
	type: 'colombia';
	title: string;
	intro: string[];
	cities: CitySection[];
};

export type FaqPage = {
	type: 'faq';
	title: string;
	items: FaqItem[];
};

export type GiftsPage = {
	type: 'gifts';
	title: string;
	paragraphs: string[];
	bankDetails: { label: string; value: string }[];
};

export type PageContent =
	| HomePage
	| StoryPage
	| RsvpPage
	| SchedulePage
	| SectionsPage
	| ListingsPage
	| AttractionsPage
	| ColombiaPage
	| FaqPage
	| GiftsPage;

export type SiteMeta = {
	coupleNames: string;
	/** Short brand for header (e.g. Fred & Caro). */
	brandNames: string;
	date: string;
	location: string;
	titleSuffix: string;
	countdownTarget: string;
};
