<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PlaceholderImage from '$lib/components/PlaceholderImage.svelte';
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
			<section class="story-section">
				{#if section.heading}
					<h3>{section.heading}</h3>
				{/if}
				<ProseBlock paragraphs={section.paragraphs} />
				{#if section.images}
					{#each section.images as image}
						<PlaceholderImage {image} />
					{/each}
				{/if}
			</section>
		{/each}
	</div>
{/if}

<style>
	.story-section {
		margin-bottom: var(--space-xl);
	}
</style>
