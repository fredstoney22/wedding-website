<script lang="ts">
	import type { HomePage } from '$lib/content';
	import { siteMeta } from '$lib/content';
	import Countdown from './Countdown.svelte';
	import ProseBlock from './ProseBlock.svelte';

	let {
		content,
		locale = 'en'
	}: {
		content: HomePage;
		locale?: 'en' | 'es';
	} = $props();

	const dateLine = $derived(
		locale === 'es'
			? `3 de julio de 2027\n${siteMeta.location}`
			: `${siteMeta.date}\n${siteMeta.location}`
	);
</script>

<div class="home-page">
	<h1 class="visually-hidden">{content.title}</h1>

	<section class="hero" aria-label={siteMeta.brandNames}>
		{#if content.hero}
			<img class="hero-image" src={content.hero.src} alt={content.hero.alt} fetchpriority="high" />
		{/if}
		<div class="hero-overlay" aria-hidden="true"></div>
		<p class="hero-headline title-script">{locale === 'es' ? '¡Nos casamos!' : 'We are getting married!'}</p>
	</section>

	<div class="page-content home-body">
		<p class="date-line">{dateLine}</p>

		{#if content.details}
			<section class="details" aria-label={locale === 'es' ? 'Detalles' : 'Wedding details'}>
				<h2 class="title-display details-title">{locale === 'es' ? 'Los Detalles' : 'The Details'}</h2>
				<dl class="details-list">
					<div>
						<dt>{locale === 'es' ? 'Fecha' : 'Date'}</dt>
						<dd>{content.details.date}</dd>
					</div>
					<div>
						<dt>{locale === 'es' ? 'Hora' : 'Time'}</dt>
						<dd>{content.details.time}</dd>
					</div>
					<div>
						<dt>{locale === 'es' ? 'Lugar' : 'Venue'}</dt>
						<dd>{content.details.venue}</dd>
					</div>
				</dl>
			</section>
		{/if}

		<ProseBlock paragraphs={content.paragraphs} />

		<Countdown target={content.countdownTarget} />
	</div>
</div>

<style>
	.home-page {
		text-align: center;
	}

	.hero {
		position: relative;
		width: 100%;
		min-height: min(72vh, 560px);
		overflow: hidden;
		background: var(--color-olive);
	}

	@media (min-width: 640px) {
		.hero {
			min-height: min(88vh, 720px);
		}
	}

	.hero-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: calc(50% + 10px) 35%;
		animation: hero-fade 1.2s ease-out both;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			transparent 70%,
			rgba(61, 64, 41, 0.35) 100%
		);
		pointer-events: none;
	}

	.hero-headline {
		position: absolute;
		top: calc(50% - 60px);
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		width: 90%;
		font-size: clamp(2rem, 7vw, 3.5rem);
		color: var(--color-bg-cream);
		text-shadow: 0 2px 16px rgba(61, 64, 41, 0.55);
		text-align: center;
		animation: hero-headline-rise 1s ease-out 0.15s both;
	}

	.home-body {
		padding: var(--space-xl) max(var(--page-gutter), env(safe-area-inset-right, 0px)) 0
			max(var(--page-gutter), env(safe-area-inset-left, 0px));
		box-sizing: border-box;
	}

	.date-line {
		font-family: var(--font-display);
		font-size: clamp(1rem, 2.5vw, 1.25rem);
		white-space: pre-line;
		margin-bottom: var(--space-lg);
		letter-spacing: 0.04em;
		animation: rise 0.9s ease-out 0.25s both;
	}

	.details {
		margin: 0 auto var(--space-xl);
		max-width: 28rem;
		text-align: left;
		animation: rise 1s ease-out 0.35s both;
	}

	.details-title {
		text-align: center;
		margin-bottom: var(--space-md);
	}

	.details-list {
		margin: 0;
		display: grid;
		gap: var(--space-sm);
	}

	.details-list div {
		display: grid;
		grid-template-columns: minmax(4rem, 5rem) minmax(0, 1fr);
		gap: var(--space-sm);
		align-items: baseline;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: var(--space-xs);
	}

	.details-list dt {
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.details-list dd {
		margin: 0;
		font-family: var(--font-display);
	}

	@keyframes hero-headline-rise {
		from {
			opacity: 0;
			transform: translate(-50%, calc(-50% + 12px));
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}

	@keyframes hero-fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
