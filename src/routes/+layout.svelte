<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	let { children } = $props();

	if (!dev) {
		inject();
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400&family=Dancing+Script:wght@500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
