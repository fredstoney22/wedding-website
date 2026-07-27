<script lang="ts">
	import type { ListingGroup } from '$lib/content';
	import FillerText from './FillerText.svelte';
	import ProseBlock from './ProseBlock.svelte';

	let { groups }: { groups: ListingGroup[] } = $props();

	function headingTag(level: number | undefined) {
		return level === 4 ? 'h4' : 'h5';
	}
</script>

{#each groups as group}
	<section class="attraction-group text-panel">
		<h3><FillerText text={group.heading} /></h3>
		{#if group.intro}
			<ProseBlock paragraphs={group.intro} />
		{/if}
		{#if group.links}
			<ProseBlock links={group.links} />
		{/if}
		{#if group.attractions}
			{#each group.attractions as attraction}
				<article class="attraction">
					<svelte:element this={headingTag(attraction.level)}
						><FillerText text={attraction.heading} /></svelte:element
					>
					<ProseBlock paragraphs={attraction.paragraphs} links={attraction.links} />
				</article>
			{/each}
		{/if}
	</section>
{/each}

<style>
	.attraction-group {
		margin-bottom: var(--space-xl);
	}

	.attraction-group > h3 {
		font-size: clamp(1.4rem, 3.5vw, 1.85rem);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	/* Space between group intro/links and following attractions */
	.attraction-group > :global(.prose) {
		margin-bottom: var(--space-md);
	}

	.attraction {
		margin-bottom: var(--space-lg);
	}
</style>
