<script lang="ts">
	import HomePageView from '$lib/components/HomePageView.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/espanol1/');
</script>

<svelte:head>
	<title>{pageTitle('HOME Español')}</title>
</svelte:head>

{#if content?.type === 'home'}
	<HomePageView {content} locale="es" />
{/if}
