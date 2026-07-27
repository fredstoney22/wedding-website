<script lang="ts">
	import HomePageView from '$lib/components/HomePageView.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/es/');
</script>

<svelte:head>
	<title>{pageTitle('Inicio')}</title>
</svelte:head>

{#if content?.type === 'home'}
	<HomePageView {content} locale="es" />
{/if}
