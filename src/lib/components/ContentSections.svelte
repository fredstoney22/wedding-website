<script lang="ts">
	import type { ContentSection } from '$lib/content';
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
	<section class="content-section">
		<svelte:element this={headingTag(section.level)}>{section.heading}</svelte:element>
		<ProseBlock paragraphs={section.paragraphs} links={section.links} />
		{#if section.list}
			<ol>
				{#each section.list as item}
					<li>{item}</li>
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

	.nested {
		margin-top: var(--space-sm);
		padding-left: 0;
	}
</style>
