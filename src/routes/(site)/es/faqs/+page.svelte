<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/es/faqs/');
</script>

<svelte:head>
	<title>{pageTitle('Preguntas frecuentes')}</title>
</svelte:head>

{#if content?.type === 'faq'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<FaqList items={content.items} />
	</div>
{/if}
