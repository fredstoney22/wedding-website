<script lang="ts">
	import type { ScheduleDay } from '$lib/content';
	import FillerText from './FillerText.svelte';
	import ProseBlock from './ProseBlock.svelte';

	let {
		days,
		mapNote
	}: {
		days: ScheduleDay[];
		mapNote?: string;
	} = $props();
</script>

{#each days as day}
	<section class="schedule-day text-panel">
		<h3 class="title-display"><FillerText text={day.date} /></h3>
		{#each day.events as event}
			<article class="schedule-event">
				<h4 class="title-script"><FillerText text={event.title} /></h4>
				<ProseBlock paragraphs={event.paragraphs} links={event.links} />
			</article>
		{/each}
		{#if day.location}
			<div class="schedule-location">
				<h4><FillerText text={day.location.heading} /></h4>
				<p><FillerText text={day.location.description} /></p>
			</div>
		{/if}
	</section>
{/each}

{#if mapNote}
	<p class="map-note text-panel"><FillerText text={mapNote} /></p>
{/if}

<style>
	.schedule-day {
		margin-bottom: var(--space-xl);
	}

	.schedule-event {
		margin-bottom: var(--space-lg);
		padding-left: 0.75rem;
		border-left: 2px solid var(--color-border);
		min-width: 0;
	}

	@media (min-width: 480px) {
		.schedule-event {
			padding-left: var(--space-sm);
		}
	}

	.schedule-event:last-of-type {
		margin-bottom: 0;
	}

	.schedule-event h4 {
		margin-bottom: var(--space-sm);
		text-transform: none;
		letter-spacing: 0.02em;
	}

	.schedule-location {
		margin-top: var(--space-md);
	}

	.map-note {
		font-style: italic;
		color: var(--color-text-muted);
		margin-top: var(--space-lg);
	}
</style>
