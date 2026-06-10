<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ContentSections from '$lib/components/ContentSections.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/about-colombia/');
</script>

<svelte:head>
	<title>{pageTitle('About Colombia')}</title>
</svelte:head>

{#if content?.type === 'sections'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		{#if content.intro}
			<ProseBlock paragraphs={content.intro} />
		{/if}
		<ContentSections sections={content.sections} />
	</div>
{/if}
