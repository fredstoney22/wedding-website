<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ColombiaCities from '$lib/components/ColombiaCities.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/about-colombia/');
</script>

<svelte:head>
	<title>{pageTitle('About Colombia')}</title>
</svelte:head>

{#if content?.type === 'colombia'}
	<div class="page-content page-content--wide">
		<PageTitle title={content.title} level={3} />
		{#if content.intro}
			<div class="intro text-panel">
				<ProseBlock paragraphs={content.intro} />
			</div>
		{/if}
		<ColombiaCities cities={content.cities} />
	</div>
{/if}

<style>
	.intro {
		margin-bottom: var(--space-xl);
	}
</style>
