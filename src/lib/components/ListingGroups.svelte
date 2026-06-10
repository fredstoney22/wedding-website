<script lang="ts">
	import type { ListingGroup } from '$lib/content';
	import ProseBlock from './ProseBlock.svelte';

	let { groups }: { groups: ListingGroup[] } = $props();
</script>

{#each groups as group}
	<section class="listing-group">
		<h3>{group.heading}</h3>
		{#if group.intro}
			<ProseBlock paragraphs={group.intro} />
		{/if}
		{#if group.links}
			<ProseBlock links={group.links} />
		{/if}
		{#if group.tiers}
			{#each group.tiers as tier}
				<div class="tier">
					<p class="tier-price">{tier.price}</p>
					<ul class="link-list">
						{#each tier.items as item}
							<li>
								{#if item.href}
									<a href={item.href}>{item.name}</a>
								{:else}
									{item.name}
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
							<a href={item.href}>{item.name}</a>
						{:else}
							{item.name}
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

	.tier {
		margin-bottom: var(--space-md);
	}

	.tier-price {
		font-family: var(--font-serif);
		font-size: 1.125rem;
		margin-bottom: var(--space-xs);
	}
</style>
