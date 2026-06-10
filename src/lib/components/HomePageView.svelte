<script lang="ts">
	import type { HomePage } from '$lib/content';
	import { siteMeta } from '$lib/content';
	import ImageCarousel from './ImageCarousel.svelte';
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
			? `Septiembre 7, 2024\n${siteMeta.location}`
			: `${siteMeta.date}\n${siteMeta.location}`
	);
</script>

<div class="page-content home-page">
	<h1 class="visually-hidden">{content.title}</h1>
	<h2>{siteMeta.coupleNames}</h2>
	<h2 class="date-line">{dateLine}</h2>

	<ImageCarousel images={content.carousel} />

	<ProseBlock paragraphs={content.paragraphs} />

	<Countdown target={content.countdownTarget} />

	<section class="hashtag">
		<h3>{content.hashtag.title}</h3>
		<ProseBlock paragraphs={content.hashtag.paragraphs} />
	</section>
</div>

<style>
	.home-page {
		text-align: center;
	}

	.date-line {
		font-size: clamp(1rem, 2.5vw, 1.25rem);
		white-space: pre-line;
		margin-bottom: var(--space-md);
	}

	.hashtag {
		margin-top: var(--space-xl);
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
