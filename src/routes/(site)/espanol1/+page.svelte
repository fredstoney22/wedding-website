<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/es/', { replaceState: true });
	});
</script>

<svelte:head>
	<meta http-equiv="refresh" content="0;url=/es/" />
	<title>Redirecting…</title>
</svelte:head>

<p><a href="/es/">Continuar en español</a></p>
