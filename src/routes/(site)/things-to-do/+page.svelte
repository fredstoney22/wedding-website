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
		<ProseBlock paragraphs={content.intro} />
		<AttractionSections groups={content.groups} />
	</div>
{/if}
