<script lang="ts">
	import type { ImageRef } from '$lib/content';

	let {
		image,
		class: className = ''
	}: {
		image: ImageRef;
		class?: string;
	} = $props();
</script>

<figure class="placeholder-image {className}" class:portrait={image.aspect === 'portrait'}>
	<img src={image.src} alt={image.alt} loading="lazy" />
</figure>

<style>
	.placeholder-image {
		margin: var(--space-md) 0;
		overflow: hidden;
		border-radius: 2px;
	}

	.placeholder-image img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		background: var(--color-placeholder);
	}

	.placeholder-image.portrait img {
		aspect-ratio: 3 / 4;
		max-width: 320px;
		margin: 0 auto;
	}
</style>
