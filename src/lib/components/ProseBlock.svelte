<script lang="ts">
	import type { InlineLink } from '$lib/content';
	import FillerText from './FillerText.svelte';

	let {
		paragraphs = [],
		links = []
	}: {
		paragraphs?: string[];
		links?: InlineLink[];
	} = $props();
</script>

<div class="prose">
	{#each paragraphs as paragraph}
		<p><FillerText text={paragraph} /></p>
	{/each}
	{#if links.length > 0}
		<ul class="link-list">
			{#each links as link}
				<li><a href={link.href}><FillerText text={link.label} /></a></li>
			{/each}
		</ul>
	{/if}
</div>
