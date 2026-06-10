<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import AttractionSections from '$lib/components/AttractionSections.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/restaurants/');
</script>

<svelte:head>
	<title>{pageTitle('Restaurants')}</title>
</svelte:head>

{#if content?.type === 'attractions'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<AttractionSections groups={content.groups} />
	</div>
{/if}
