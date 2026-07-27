<script lang="ts">
	import { siteMeta } from '$lib/content';
</script>

<footer class="site-footer">
	<p class="brand title-script">{siteMeta.brandNames}</p>
	<p class="meta">{siteMeta.date} · {siteMeta.location}</p>
</footer>

<style>
	.site-footer {
		text-align: center;
		padding: var(--space-xl) max(var(--page-gutter), env(safe-area-inset-right, 0px))
			max(var(--space-xl), env(safe-area-inset-bottom, 0px))
			max(var(--page-gutter), env(safe-area-inset-left, 0px));
		border-top: 1px solid var(--color-border);
		background: color-mix(in srgb, var(--color-bg-cream) 70%, var(--color-bg));
	}

	.brand {
		margin: 0 0 var(--space-xs);
		font-size: clamp(1.35rem, 5vw, 1.75rem);
	}

	.meta {
		margin: var(--space-xs) 0 0;
		font-size: 0.8rem;
		color: var(--color-text-muted);
		padding-inline: 0.25rem;
	}
</style>
