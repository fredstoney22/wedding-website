<script lang="ts">
	import type { FaqItem } from '$lib/content';
	import FillerText from './FillerText.svelte';
	import ProseBlock from './ProseBlock.svelte';

	let { items }: { items: FaqItem[] } = $props();
</script>

{#each items as item}
	<article class="faq-item text-panel">
		<h4><FillerText text={item.question} /></h4>
		<ProseBlock paragraphs={item.paragraphs} links={item.links} />
		{#if item.list}
			<ul>
				{#each item.list as entry}
					<li><FillerText text={entry} /></li>
				{/each}
			</ul>
		{/if}
	</article>
{/each}

<style>
	.faq-item {
		margin-bottom: var(--space-lg);
	}

	.faq-item h4 {
		font-size: clamp(1.4rem, 3.5vw, 1.85rem);
		font-weight: 600;
		letter-spacing: 0.02em;
		margin-bottom: var(--space-sm);
		text-transform: none;
	}
</style>
