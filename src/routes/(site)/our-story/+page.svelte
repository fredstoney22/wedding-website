<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import FillerText from '$lib/components/FillerText.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/our-story/');
</script>

<svelte:head>
	<title>{pageTitle('Our Story')}</title>
</svelte:head>

{#if content?.type === 'story'}
	<div class="page-content">
		<PageTitle title={content.title} />
		{#each content.sections as section}
			<section class="story-section text-panel">
				{#if section.heading}
					<h3 class="title-script"><FillerText text={section.heading} /></h3>
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

	.story-section h3 {
		text-transform: none;
		letter-spacing: 0.02em;
	}
</style>
