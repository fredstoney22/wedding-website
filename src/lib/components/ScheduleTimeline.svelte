<script lang="ts">
	import type { ScheduleDay } from '$lib/content';
	import ProseBlock from './ProseBlock.svelte';

	let { days }: { days: ScheduleDay[] } = $props();
</script>

{#each days as day}
	<section class="schedule-day">
		<h3>{day.date}</h3>
		{#each day.events as event}
			<article class="schedule-event">
				<h6>{event.title}</h6>
				<ProseBlock paragraphs={event.paragraphs} links={event.links} />
			</article>
		{/each}
		{#if day.location}
			<div class="schedule-location">
				<h4>{day.location.heading}</h4>
				<div class="map-placeholder" aria-hidden="true"></div>
				<p>{day.location.description}</p>
			</div>
		{/if}
	</section>
{/each}

<style>
	.schedule-day {
		margin-bottom: var(--space-xl);
	}

	.schedule-event {
		margin-bottom: var(--space-lg);
	}

	.schedule-event h6 {
		margin-bottom: var(--space-sm);
	}

	.schedule-location {
		margin-top: var(--space-md);
	}

	.map-placeholder {
		width: 100%;
		height: 200px;
		background: var(--color-placeholder);
		margin: var(--space-sm) 0;
		border-radius: 2px;
	}
</style>
