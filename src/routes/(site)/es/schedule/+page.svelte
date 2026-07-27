<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ScheduleTimeline from '$lib/components/ScheduleTimeline.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/es/schedule/');
</script>

<svelte:head>
	<title>{pageTitle('Horario')}</title>
</svelte:head>

{#if content?.type === 'schedule'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<ScheduleTimeline days={content.days} mapNote={content.mapNote} />
	</div>
{/if}
