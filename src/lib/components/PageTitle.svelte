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
	<h1>{title}</h1>
{:else if level === 3}
	<h3>{title}</h3>
{:else}
	<h2>{title}</h2>
{/if}
