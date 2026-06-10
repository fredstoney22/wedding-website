<script lang="ts">
	import type { ListingGroup } from '$lib/content';
	import ProseBlock from './ProseBlock.svelte';

	let { groups }: { groups: ListingGroup[] } = $props();

	function headingTag(level: number | undefined) {
		return level === 4 ? 'h4' : 'h5';
	}
</script>

{#each groups as group}
	<section class="attraction-group">
		<h3>{group.heading}</h3>
		{#if group.intro}
			<ProseBlock paragraphs={group.intro} />
		{/if}
		{#if group.links}
			<ProseBlock links={group.links} />
		{/if}
		{#if group.attractions}
			{#each group.attractions as attraction}
				<article class="attraction">
					<svelte:element this={headingTag(attraction.level)}>{attraction.heading}</svelte:element>
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

	.attraction {
		margin-bottom: var(--space-lg);
	}
</style>
