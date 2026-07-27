<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import FillerText from '$lib/components/FillerText.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/es/our-story/');
</script>

<svelte:head>
	<title>{pageTitle('Nuestra Historia')}</title>
</svelte:head>

{#if content?.type === 'story'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		{#each content.sections as section}
			<section class="story-section text-panel">
				{#if section.heading}
					<h4 class="title-script"><FillerText text={section.heading} /></h4>
				{/if}
				{#if section.images?.length}
					<ImageCarousel images={section.images} />
				{/if}
				<ProseBlock paragraphs={section.paragraphs} />
			</section>
		{/each}
	</div>
{/if}

<style>
	.story-section {
		margin-bottom: var(--space-xl);
	}

	.story-section h4 {
		text-transform: none;
		letter-spacing: 0.02em;
	}
</style>
