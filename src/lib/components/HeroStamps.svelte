<script lang="ts">
	type Stamp = {
		src: string;
		alt: string;
		class: string;
	};

	const stamps: Stamp[] = [
		{
			src: '/images/stamps/chiquinquira.webp',
			alt: '',
			class: 'stamp-chiquinquira'
		},
		{
			src: '/images/stamps/washington.webp',
			alt: '',
			class: 'stamp-washington'
		},
		{
			src: '/images/stamps/chicago.webp',
			alt: '',
			class: 'stamp-chicago'
		},
		{
			src: '/images/stamps/greece.webp',
			alt: '',
			class: 'stamp-greece'
		},
		{
			src: '/images/stamps/london.webp',
			alt: '',
			class: 'stamp-london'
		},
		{
			src: '/images/stamps/harpers-ferry.webp',
			alt: '',
			class: 'stamp-harpers-ferry'
		}
	];
</script>

<div class="hero-stamps" aria-hidden="true">
	{#each stamps as stamp (stamp.class)}
		<img class="stamp {stamp.class}" src={stamp.src} alt={stamp.alt} loading="lazy" />
	{/each}
</div>

<style>
	.hero-stamps {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
	}

	.stamp {
		position: absolute;
		width: clamp(56px, 13vw, 88px);
		height: auto;
		filter: drop-shadow(0 6px 14px rgba(61, 64, 41, 0.35));
		animation:
			hero-fade 1s ease-out both,
			stamp-float var(--float-duration, 7s) ease-in-out var(--float-delay, 0s) infinite;
	}

	/* Landscape stamps */
	.stamp-chiquinquira,
	.stamp-greece,
	.stamp-harpers-ferry {
		width: clamp(64px, 15vw, 96px);
	}

	.stamp-chiquinquira {
		top: 6%;
		left: 4%;
		--stamp-rotate: -13deg;
		--float-duration: 7.5s;
		--float-delay: 0s;
		animation-delay: 0.1s, 0s;
	}

	.stamp-washington {
		top: 7%;
		right: 5%;
		--stamp-rotate: 10deg;
		--float-duration: 8s;
		--float-delay: 0.6s;
		animation-delay: 0.25s, 0.6s;
	}

	.stamp-chicago {
		display: none;
		top: 24%;
		left: 7%;
		width: clamp(46px, 10vw, 66px);
		--stamp-rotate: -7deg;
		--float-duration: 6.5s;
		--float-delay: 1.1s;
		animation-delay: 0.4s, 1.1s;
	}

	.stamp-greece {
		display: none;
		top: 21%;
		right: 6%;
		--stamp-rotate: 8deg;
		--float-duration: 7.2s;
		--float-delay: 0.3s;
		animation-delay: 0.35s, 0.3s;
	}

	.stamp-london {
		bottom: 8%;
		left: 5%;
		width: clamp(52px, 12vw, 76px);
		--stamp-rotate: 13deg;
		--float-duration: 6.8s;
		--float-delay: 0.9s;
		animation-delay: 0.5s, 0.9s;
	}

	.stamp-harpers-ferry {
		bottom: 6%;
		right: 4%;
		--stamp-rotate: -10deg;
		--float-duration: 7.8s;
		--float-delay: 0.2s;
		animation-delay: 0.45s, 0.2s;
	}

	.stamp {
		transform: rotate(var(--stamp-rotate, 0deg));
	}

	@media (min-width: 480px) {
		.stamp-chicago,
		.stamp-greece {
			display: block;
		}
	}

	@keyframes stamp-float {
		0%,
		100% {
			transform: rotate(var(--stamp-rotate, 0deg)) translateY(0);
		}
		50% {
			transform: rotate(var(--stamp-rotate, 0deg)) translateY(-8px);
		}
	}

	@keyframes hero-fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stamp {
			animation: none;
		}
	}
</style>
