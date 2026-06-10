<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/content';

	let {
		items,
		open = false,
		onclose
	}: {
		items: NavItem[];
		open?: boolean;
		onclose?: () => void;
	} = $props();

	let expandedRecommendations = $state(false);

	function isActive(href: string): boolean {
		const path = $page.url.pathname;
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}

	function handleNavClick() {
		onclose?.();
	}
</script>

<nav class="site-nav" class:open aria-label="Main navigation">
	<ul class="nav-list">
		{#each items as item}
			<li class="nav-item" class:active={isActive(item.href)}>
				{#if item.children}
					<div class="nav-parent">
						<a href={item.href} onclick={handleNavClick}>{item.label}</a>
						<button
							type="button"
							class="submenu-toggle"
							aria-expanded={expandedRecommendations}
							aria-label="Toggle recommendations submenu"
							onclick={() => (expandedRecommendations = !expandedRecommendations)}
						>
							+
						</button>
					</div>
					<ul class="submenu" class:expanded={expandedRecommendations}>
						{#each item.children as child}
							<li class:active={isActive(child.href)}>
								<a href={child.href} onclick={handleNavClick}>{child.label}</a>
							</li>
						{/each}
					</ul>
				{:else}
					<a href={item.href} onclick={handleNavClick}>{item.label}</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style>
	.site-nav {
		display: none;
	}

	.site-nav.open {
		display: block;
		position: fixed;
		inset: var(--header-height) 0 0 0;
		background: var(--color-bg);
		padding: var(--space-md);
		overflow-y: auto;
		z-index: 90;
		border-top: 1px solid var(--color-border);
	}

	.nav-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-item {
		border-bottom: 1px solid var(--color-border);
	}

	.nav-item a {
		display: block;
		padding: var(--space-sm) 0;
		text-decoration: none;
		color: var(--color-text);
		font-family: var(--font-serif);
	}

	.nav-item.active > a,
	.submenu li.active a {
		font-weight: 600;
	}

	.nav-parent {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.submenu-toggle {
		background: none;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
		padding: var(--space-sm);
		line-height: 1;
	}

	.submenu {
		display: none;
		list-style: none;
		margin: 0;
		padding: 0 0 var(--space-sm) var(--space-md);
	}

	.submenu.expanded {
		display: block;
	}

	.submenu a {
		font-size: 0.95rem;
	}

	@media (min-width: 900px) {
		.site-nav {
			display: block;
			position: static;
			border: none;
			padding: 0;
			overflow: visible;
		}

		.nav-list {
			display: flex;
			flex-wrap: wrap;
			gap: 0 var(--space-md);
			justify-content: center;
		}

		.nav-item {
			border: none;
			position: relative;
		}

		.nav-item a {
			padding: var(--space-xs) 0;
			font-size: 0.85rem;
		}

		.nav-item:hover .submenu,
		.nav-item:focus-within .submenu {
			display: block;
		}

		.submenu {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			background: var(--color-bg);
			border: 1px solid var(--color-border);
			padding: var(--space-xs) var(--space-sm);
			min-width: 180px;
			z-index: 100;
		}

		.submenu-toggle {
			display: none;
		}
	}
</style>
