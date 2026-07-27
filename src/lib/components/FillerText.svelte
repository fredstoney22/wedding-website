<script lang="ts">
	import { parseFillerText } from '$lib/content/filler';

	let { text }: { text: string } = $props();

	const parts = $derived(parseFillerText(text));
</script>

{#each parts as part}
	{#if part.type === 'filler'}
		<span class="filler-aura">{part.value}</span>
	{:else if part.type === 'link'}
		<a href={part.href}>{part.value}</a>
	{:else}
		{part.value}
	{/if}
{/each}
