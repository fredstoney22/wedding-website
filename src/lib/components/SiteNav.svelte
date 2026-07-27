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

	const spanishPaths = new Set([
		'/es/',
		'/es/our-story/',
		'/es/rsvp/',
		'/es/schedule/',
		'/es/travel-information/',
		'/es/faqs/'
	]);

	const isEs = $derived(
		$page.url.pathname.startsWith('/es') || $page.url.pathname.startsWith('/espanol1')
	);

	const englishHref = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/es/' || path === '/espanol1/') return '/';
		if (path.startsWith('/es/')) {
			const mapped = path.replace(/^\/es/, '');
			return mapped.endsWith('/') ? mapped : `${mapped}/`;
		}
		return '/';
	});

	const spanishHref = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/') return '/es/';
		const candidate = `/es${path.endsWith('/') ? path : `${path}/`}`;
		return spanishPaths.has(candidate) ? candidate : '/es/';
	});

	function isActive(href: string): boolean {
		const path = $page.url.pathname;
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}

	function handleNavClick() {
		onclose?.();
	}
</script>

<nav class="site-nav" class:open={open} aria-label="Main navigation">
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
		<li class="nav-item lang-switcher" aria-label="Language">
			<a
				href={englishHref}
				class="lang-flag"
				class:active={!isEs}
				hreflang="en"
				lang="en"
				aria-label="English"
				aria-current={!isEs ? 'page' : undefined}
				onclick={handleNavClick}
				title="English"
			>
				<span class="flag" aria-hidden="true">🇺🇸</span>
			</a>
			<a
				href={spanishHref}
				class="lang-flag"
				class:active={isEs}
				hreflang="es"
				lang="es"
				aria-label="Español"
				aria-current={isEs ? 'page' : undefined}
				onclick={handleNavClick}
				title="Español"
			>
				<span class="flag" aria-hidden="true">🇨🇴</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.site-nav {
		display: none;
	}

	.site-nav.open {
		display: block;
		/* Absolute under the sticky header — avoids fixed-position trapping from header stacking contexts */
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		max-height: calc(100dvh - var(--header-height));
		background: var(--color-bg);
		padding: var(--space-md) max(var(--page-gutter), env(safe-area-inset-right, 0px))
			max(var(--space-md), env(safe-area-inset-bottom, 0px))
			max(var(--page-gutter), env(safe-area-inset-left, 0px));
		overflow-y: auto;
		z-index: 110;
		border-top: 1px solid var(--color-border);
		box-shadow: 0 12px 28px rgba(109, 83, 42, 0.12);
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

	.lang-switcher {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: var(--space-sm) 0;
		border-bottom: none;
	}

	.lang-flag {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.15rem 0.2rem;
		opacity: 0.45;
		line-height: 1;
		border-radius: 2px;
		transition: opacity 0.15s ease;
	}

	.lang-flag:hover,
	.lang-flag:focus-visible,
	.lang-flag.active {
		opacity: 1;
	}

	.lang-flag.active {
		outline: 1px solid var(--color-border);
		outline-offset: 2px;
	}

	.flag {
		font-size: 1.35rem;
		line-height: 1;
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
			align-items: center;
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

		.lang-switcher {
			padding: 0;
			margin-left: var(--space-xs);
		}

		.lang-flag {
			padding: 0;
		}

		.flag {
			font-size: 1.15rem;
		}
	}
</style>
