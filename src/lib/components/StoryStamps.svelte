<script lang="ts">
	type Stamp = {
		src: string;
		alt: string;
		class: string;
	};

	const stamps: Stamp[] = [
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
			src: '/images/stamps/harpers-ferry.webp',
			alt: '',
			class: 'stamp-harpers-ferry'
		},
		{
			src: '/images/stamps/greece.webp',
			alt: '',
			class: 'stamp-greece'
		},
		{
			src: '/images/stamps/chiquinquira.webp',
			alt: '',
			class: 'stamp-chiquinquira'
		},
		{
			src: '/images/stamps/london.webp',
			alt: '',
			class: 'stamp-london'
		}
	];
</script>

<div class="story-stamps" aria-hidden="true">
	{#each stamps as stamp (stamp.class)}
		<img class="stamp {stamp.class}" src={stamp.src} alt={stamp.alt} loading="lazy" />
	{/each}
</div>

<style>
	.story-stamps {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-end;
		gap: clamp(0.4rem, 2.5vw, 1.1rem);
		margin: 0 0 var(--space-md);
		padding: 0.5rem 0.25rem 0;
	}

	.stamp {
		width: clamp(50px, 11vw, 76px);
		height: auto;
		filter: drop-shadow(0 4px 10px rgba(61, 64, 41, 0.3));
		animation:
			stamp-fade 0.8s ease-out both,
			stamp-float var(--float-duration, 7s) ease-in-out var(--float-delay, 0s) infinite;
		transform: rotate(var(--stamp-rotate, 0deg));
	}

	.stamp-washington {
		--stamp-rotate: -9deg;
		--float-duration: 7.4s;
		--float-delay: 0.1s;
		animation-delay: 0s, 0.1s;
		align-self: flex-start;
	}

	.stamp-chicago {
		width: clamp(38px, 8.5vw, 58px);
		--stamp-rotate: 6deg;
		--float-duration: 6.6s;
		--float-delay: 0.5s;
		animation-delay: 0.08s, 0.5s;
	}

	.stamp-harpers-ferry {
		width: clamp(58px, 13vw, 88px);
		--stamp-rotate: -6deg;
		--float-duration: 7.9s;
		--float-delay: 0.2s;
		animation-delay: 0.16s, 0.2s;
	}

	.stamp-greece {
		width: clamp(58px, 13vw, 88px);
		--stamp-rotate: 8deg;
		--float-duration: 7.1s;
		--float-delay: 0.7s;
		animation-delay: 0.24s, 0.7s;
	}

	.stamp-chiquinquira {
		width: clamp(58px, 13vw, 88px);
		--stamp-rotate: -11deg;
		--float-duration: 6.9s;
		--float-delay: 0.35s;
		animation-delay: 0.32s, 0.35s;
		align-self: flex-start;
	}

	.stamp-london {
		width: clamp(44px, 10vw, 64px);
		--stamp-rotate: 10deg;
		--float-duration: 7.6s;
		--float-delay: 0.6s;
		animation-delay: 0.4s, 0.6s;
	}

	@keyframes stamp-fade {
		from {
			opacity: 0;
			transform: rotate(var(--stamp-rotate, 0deg)) translateY(8px);
		}
		to {
			opacity: 1;
			transform: rotate(var(--stamp-rotate, 0deg)) translateY(0);
		}
	}

	@keyframes stamp-float {
		0%,
		100% {
			transform: rotate(var(--stamp-rotate, 0deg)) translateY(0);
		}
		50% {
			transform: rotate(var(--stamp-rotate, 0deg)) translateY(-6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stamp {
			animation: none;
		}
	}
</style>
