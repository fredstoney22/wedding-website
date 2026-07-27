<script lang="ts">
	import type { ListingGroup } from '$lib/content';
	import FillerText from './FillerText.svelte';
	import ProseBlock from './ProseBlock.svelte';

	let { groups }: { groups: ListingGroup[] } = $props();
</script>

{#each groups as group}
	<section class="listing-group text-panel">
		<h3><FillerText text={group.heading} /></h3>
		{#if group.intro}
			<ProseBlock paragraphs={group.intro} />
		{/if}
		{#if group.links}
			<ProseBlock links={group.links} />
		{/if}
		{#if group.tiers}
			{#each group.tiers as tier}
				<div class="tier">
					<p class="tier-price"><FillerText text={tier.price} /></p>
					<ul class="link-list">
						{#each tier.items as item}
							<li>
								{#if item.href}
									<a href={item.href}><FillerText text={item.name} /></a>
								{:else}
									<FillerText text={item.name} />
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		{/if}
		{#if group.items}
			<ul class="link-list">
				{#each group.items as item}
					<li>
						{#if item.href}
							<a href={item.href}><FillerText text={item.name} /></a>
						{:else}
							<FillerText text={item.name} />
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</section>
{/each}

<style>
	.listing-group {
		margin-bottom: var(--space-xl);
	}

	.listing-group > h3 {
		font-size: clamp(1.4rem, 3.5vw, 1.85rem);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	/* Space between group intro/links and following tiers/lists */
	.listing-group > :global(.prose) {
		margin-bottom: var(--space-md);
	}

	.tier {
		margin-bottom: var(--space-md);
	}

	.tier-price {
		font-family: var(--font-serif);
		font-size: 1.125rem;
		margin-bottom: var(--space-xs);
	}
</style>
