<script lang="ts">
	import { siteMeta } from '$lib/content';
	import SiteNav from './SiteNav.svelte';
	import type { NavItem } from '$lib/content';

	let { navItems }: { navItems: NavItem[] } = $props();

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header">
	<div class="header-inner">
		<a href="/" class="logo" aria-label={siteMeta.coupleNames}>
			<span class="monogram">C<span class="heart">♥</span>F</span>
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
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-sm) var(--space-md);
		max-width: 960px;
		margin: 0 auto;
	}

	.logo {
		text-decoration: none;
		color: var(--color-text);
	}

	.monogram {
		font-family: var(--font-serif);
		font-size: 1.5rem;
		font-style: italic;
	}

	.heart {
		font-style: normal;
		font-size: 0.85em;
	}

	.menu-toggle {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
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
