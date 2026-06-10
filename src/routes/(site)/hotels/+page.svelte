<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ListingGroups from '$lib/components/ListingGroups.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/hotels/');
</script>

<svelte:head>
	<title>{pageTitle('Hotels')}</title>
</svelte:head>

{#if content?.type === 'listings'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<ProseBlock paragraphs={content.intro} />
		<ListingGroups groups={content.groups} />
	</div>
{/if}
