<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import AttractionSections from '$lib/components/AttractionSections.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/things-to-do/');
</script>

<svelte:head>
	<title>{pageTitle('Things to do')}</title>
</svelte:head>

{#if content?.type === 'attractions'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		{#if content.intro?.length}
			<div class="text-panel intro-panel">
				<ProseBlock paragraphs={content.intro} />
			</div>
		{/if}
		<AttractionSections groups={content.groups} />
	</div>
{/if}

<style>
	.intro-panel {
		margin-bottom: var(--space-lg);
	}
</style>
