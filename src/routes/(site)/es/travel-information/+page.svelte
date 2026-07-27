<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ContentSections from '$lib/components/ContentSections.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/es/travel-information/');
</script>

<svelte:head>
	<title>{pageTitle('Información de viaje')}</title>
</svelte:head>

{#if content?.type === 'sections'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		{#if content.intro}
			<div class="text-panel intro-panel">
				<ProseBlock paragraphs={content.intro} />
			</div>
		{/if}
		<ContentSections sections={content.sections} />
	</div>
{/if}

<style>
	.intro-panel {
		margin-bottom: var(--space-lg);
	}
</style>
