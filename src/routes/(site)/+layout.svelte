<script lang="ts">
	import '$lib/styles/site.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { getNav } from '$lib/content';
	import { page } from '$app/stores';

	let { children } = $props();

	const isHome = $derived($page.url.pathname === '/' || $page.url.pathname === '/es/' || $page.url.pathname === '/espanol1/');
	const isEs = $derived(
		$page.url.pathname.startsWith('/es') || $page.url.pathname.startsWith('/espanol1')
	);
	const navItems = $derived(getNav(isEs ? 'es' : 'en'));
</script>

<SiteHeader {navItems} />

<main class="site-main" class:has-section-bg={!isHome} class:is-home={isHome}>
	{@render children()}
</main>

<SiteFooter />

<style>
	.site-main.is-home {
		/* Full-bleed hero; horizontal gutters live on .home-body */
		padding: 0 0 var(--space-xl);
	}
</style>
