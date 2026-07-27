<script lang="ts">
	import { siteMeta } from '$lib/content';
	import SiteNav from './SiteNav.svelte';
	import type { NavItem } from '$lib/content';
	import { page } from '$app/stores';

	let { navItems }: { navItems: NavItem[] } = $props();

	let menuOpen = $state(false);
	const homeHref = $derived(
		$page.url.pathname.startsWith('/es') || $page.url.pathname.startsWith('/espanol1')
			? '/es/'
			: '/'
	);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header">
	<div class="header-inner">
		<a href={homeHref} class="logo" aria-label={siteMeta.coupleNames}>
			<span class="brand title-display">{siteMeta.brandNames}</span>
		</a>

		<button
			type="button"
			class="menu-toggle"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			onclick={toggleMenu}
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</div>

	<SiteNav items={navItems} open={menuOpen} onclose={closeMenu} />
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		min-height: var(--header-height);
		/* Keep overflow visible so the mobile dropdown can paint below the bar */
		overflow: visible;
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-sm);
		padding: var(--space-sm) max(var(--page-gutter), env(safe-area-inset-right, 0px))
			var(--space-sm) max(var(--page-gutter), env(safe-area-inset-left, 0px));
		max-width: 960px;
		margin: 0 auto;
		width: 100%;
		box-sizing: border-box;
	}

	.logo {
		text-decoration: none;
		color: var(--color-text);
		min-width: 0;
	}

	.brand {
		font-size: clamp(1rem, 4.2vw, 1.15rem);
		letter-spacing: 0.1em;
	}

	.menu-toggle {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		flex-shrink: 0;
	}

	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--color-text);
	}

	@media (min-width: 900px) {
		.menu-toggle {
			display: none;
		}

		.site-header {
			padding-bottom: var(--space-sm);
		}
	}
</style>
