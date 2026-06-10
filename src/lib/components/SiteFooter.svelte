<script lang="ts">
	import { siteMeta } from '$lib/content';
</script>

<footer class="site-footer">
	<p class="monogram" aria-hidden="true">C♥F</p>
	<p class="names">{siteMeta.coupleNames}</p>
</footer>

<style>
	.site-footer {
		text-align: center;
		padding: var(--space-xl) var(--space-md);
		border-top: 1px solid var(--color-border);
	}

	.monogram {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-style: italic;
		margin: 0 0 var(--space-xs);
	}

	.names {
		margin: 0;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}
</style>
