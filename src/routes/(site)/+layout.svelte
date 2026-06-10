<script lang="ts">
	import '$lib/styles/site.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { getNav } from '$lib/content';
	import { page } from '$app/stores';

	let { children } = $props();

	const navItems = $derived(
		$page.url.pathname.startsWith('/espanol1') ? getNav('es') : getNav('en')
	);
</script>

<SiteHeader {navItems} />

<main class="site-main">
	{@render children()}
</main>

<SiteFooter />
