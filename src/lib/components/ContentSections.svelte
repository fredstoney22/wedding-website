<script lang="ts">
	import type { ContentSection } from '$lib/content';
	import FillerText from './FillerText.svelte';
	import ProseBlock from './ProseBlock.svelte';
	import Self from './ContentSections.svelte';

	let { sections }: { sections: ContentSection[] } = $props();

	function headingTag(level: number | undefined) {
		switch (level) {
			case 3:
				return 'h3';
			case 4:
				return 'h4';
			case 5:
				return 'h5';
			case 6:
				return 'h6';
			default:
				return 'h4';
		}
	}
</script>

{#each sections as section}
	<section class="content-section text-panel">
		<svelte:element this={headingTag(section.level)}
			><FillerText text={section.heading} /></svelte:element
		>
		<ProseBlock paragraphs={section.paragraphs} links={section.links} />
		{#if section.list}
			<ol>
				{#each section.list as item}
					<li><FillerText text={item} /></li>
				{/each}
			</ol>
		{/if}
		{#if section.children}
			<div class="nested">
				<Self sections={section.children} />
			</div>
		{/if}
	</section>
{/each}

<style>
	.content-section {
		margin-bottom: var(--space-lg);
	}

	.content-section > :global(h3),
	.content-section > :global(h4) {
		font-size: clamp(1.4rem, 3.5vw, 1.85rem);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	/* Avoid nested frosted boxes stacking inside a parent panel */
	.content-section :global(.content-section) {
		background: transparent;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		padding: var(--space-sm) 0 0;
		border-radius: 0;
		margin-bottom: var(--space-md);
	}

	.nested {
		margin-top: var(--space-sm);
		padding-left: 0;
	}
</style>
