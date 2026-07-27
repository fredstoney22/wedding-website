<script lang="ts">
	import type { CitySection } from '$lib/content';
	import ProseBlock from './ProseBlock.svelte';

	let { cities }: { cities: CitySection[] } = $props();
</script>

{#each cities as city, i}
	{#if city.region && (i === 0 || cities[i - 1]?.region !== city.region)}
		<p class="region title-display">{city.region}</p>
	{/if}
	<article class="city-block" class:reverse={i % 2 === 1}>
		<div class="city-copy text-panel">
			{#if city.scriptHeading}
				<h3 class="title-script">{city.heading}</h3>
			{:else}
				<h3 class="title-display">{city.heading}</h3>
			{/if}
			<ProseBlock paragraphs={city.paragraphs} />
		</div>
		{#if city.image}
			<figure class="city-media">
				<img src={city.image.src} alt={city.image.alt} loading="lazy" />
			</figure>
		{/if}
	</article>
{/each}

<style>
	.region {
		margin: var(--space-xl) 0 var(--space-md);
		font-size: 0.85rem;
		letter-spacing: 0.14em;
		text-align: center;
		color: var(--color-terracotta);
	}

	.city-block {
		display: grid;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
		align-items: center;
		min-width: 0;
	}

	.city-copy {
		min-width: 0;
	}

	.city-copy h3 {
		margin-bottom: var(--space-sm);
	}

	.city-media {
		margin: 0;
		min-width: 0;
	}

	.city-media img {
		width: 100%;
		max-height: 280px;
		object-fit: cover;
		border-radius: 2px;
		box-shadow: 0 8px 24px rgba(109, 83, 42, 0.12);
	}

	@media (min-width: 720px) {
		.city-media img {
			max-height: 360px;
		}

		.city-block {
			grid-template-columns: 1.2fr 0.8fr;
		}

		.city-block.reverse {
			grid-template-columns: 0.8fr 1.2fr;
		}

		.city-block.reverse .city-copy {
			order: 2;
		}

		.city-block.reverse .city-media {
			order: 1;
		}
	}
</style>
