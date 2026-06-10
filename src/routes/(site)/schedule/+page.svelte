<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ScheduleTimeline from '$lib/components/ScheduleTimeline.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/schedule/');
</script>

<svelte:head>
	<title>{pageTitle('Schedule')}</title>
</svelte:head>

{#if content?.type === 'schedule'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<ScheduleTimeline days={content.days} />
	</div>
{/if}
