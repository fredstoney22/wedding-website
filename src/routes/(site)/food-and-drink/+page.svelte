<script lang="ts">
	import ContentSections from '$lib/components/ContentSections.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/food-and-drink/');
</script>

<svelte:head>
	<title>{pageTitle('Food and Drink')}</title>
</svelte:head>

{#if content?.type === 'sections'}
	<div class="page-content">
		{#if content.intro}
			<div class="intro-block text-panel">
				<h1 class="title-script intro">{content.intro[0]}</h1>
				{#if content.intro.length > 1}
					<ProseBlock paragraphs={content.intro.slice(1)} />
				{/if}
			</div>
		{/if}
		<ContentSections sections={content.sections} />
	</div>
{/if}

<style>
	.intro-block {
		margin-bottom: var(--space-lg);
	}

	.intro {
		margin: 0 0 var(--space-sm);
		text-align: center;
		font-size: clamp(1.75rem, 4.5vw, 2.5rem);
	}
</style>
