<script lang="ts">
	import { onMount } from 'svelte';

	let { target }: { target: string } = $props();

	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);

	function update() {
		const diff = new Date(target).getTime() - Date.now();
		if (diff <= 0) {
			days = hours = minutes = seconds = 0;
			return;
		}
		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
		minutes = Math.floor((diff / (1000 * 60)) % 60);
		seconds = Math.floor((diff / 1000) % 60);
	}

	onMount(() => {
		update();
		const id = setInterval(update, 1000);
		return () => clearInterval(id);
	});
</script>

<div class="countdown" aria-label="Countdown to wedding">
	<div class="countdown-item">
		<span class="countdown-value">{String(days).padStart(2, '0')}</span>
		<span class="countdown-label">Days</span>
	</div>
	<div class="countdown-item">
		<span class="countdown-value">{String(hours).padStart(2, '0')}</span>
		<span class="countdown-label">Hours</span>
	</div>
	<div class="countdown-item">
		<span class="countdown-value">{String(minutes).padStart(2, '0')}</span>
		<span class="countdown-label">Minutes</span>
	</div>
	<div class="countdown-item">
		<span class="countdown-value">{String(seconds).padStart(2, '0')}</span>
		<span class="countdown-label">Seconds</span>
	</div>
</div>

<style>
	.countdown {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-sm);
		margin: var(--space-lg) 0;
		text-align: center;
	}

	.countdown-value {
		display: block;
		font-family: var(--font-serif);
		font-size: clamp(1.5rem, 4vw, 2rem);
		line-height: 1.2;
	}

	.countdown-label {
		display: block;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-text-muted);
		margin-top: 0.25rem;
	}
</style>
