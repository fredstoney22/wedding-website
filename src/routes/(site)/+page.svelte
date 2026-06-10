<script lang="ts">
	import HomePageView from '$lib/components/HomePageView.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/');
</script>

<svelte:head>
	<title>{pageTitle('Home')}</title>
</svelte:head>

{#if content?.type === 'home'}
	<HomePageView {content} />
{/if}
