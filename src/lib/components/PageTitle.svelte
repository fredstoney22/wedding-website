<script lang="ts">
	let {
		title,
		level = 2
	}: {
		title: string;
		level?: 1 | 2 | 3;
	} = $props();
</script>

{#if level === 1}
	<h1 class="page-title">{title}</h1>
{:else if level === 3}
	<h3 class="page-title">{title}</h3>
{:else}
	<h2 class="page-title">{title}</h2>
{/if}

<style>
	.page-title {
		font-size: clamp(1.65rem, 6vw, 2.5rem);
		font-weight: 600;
		letter-spacing: 0.04em;
		margin-bottom: var(--space-md);
		overflow-wrap: break-word;
	}
</style>
