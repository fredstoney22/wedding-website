<script lang="ts">
	import type { FaqItem } from '$lib/content';
	import ProseBlock from './ProseBlock.svelte';

	let { items }: { items: FaqItem[] } = $props();
</script>

{#each items as item}
	<article class="faq-item">
		<h6>{item.question}</h6>
		<ProseBlock paragraphs={item.paragraphs} links={item.links} />
		{#if item.list}
			<ol>
				{#each item.list as entry}
					<li>{entry}</li>
				{/each}
			</ol>
		{/if}
	</article>
{/each}

<style>
	.faq-item {
		margin-bottom: var(--space-lg);
	}

	.faq-item h6 {
		margin-bottom: var(--space-sm);
	}
</style>
