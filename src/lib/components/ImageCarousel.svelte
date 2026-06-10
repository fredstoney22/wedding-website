<script lang="ts">
	import type { ImageRef } from '$lib/content';

	let { images }: { images: ImageRef[] } = $props();

	const track = $derived([...images, ...images]);
</script>

<div class="carousel" aria-label="Photo carousel">
	<div class="carousel-track">
		{#each track as image, i (i)}
			<div class="carousel-slide">
				<img src={image.src} alt={image.alt} loading={i < images.length ? 'eager' : 'lazy'} />
			</div>
		{/each}
	</div>
</div>

<style>
	.carousel {
		width: 100%;
		overflow: hidden;
		margin: var(--space-md) 0 var(--space-lg);
	}

	.carousel-track {
		display: flex;
		width: max-content;
		animation: scroll 24s linear infinite;
	}

	.carousel-slide {
		flex: 0 0 auto;
		width: min(280px, 70vw);
		padding: 0 0.35rem;
	}

	.carousel-slide img {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
		background: var(--color-placeholder);
		border-radius: 2px;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (min-width: 640px) {
		.carousel-slide {
			width: 240px;
		}
	}
</style>
