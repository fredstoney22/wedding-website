<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ContentSections from '$lib/components/ContentSections.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/hair-makeup/');
</script>

<svelte:head>
	<title>{pageTitle('Hair & Makeup')}</title>
</svelte:head>

{#if content?.type === 'sections'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<ContentSections sections={content.sections} />
	</div>
{/if}
