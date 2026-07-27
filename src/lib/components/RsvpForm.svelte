<script lang="ts">
	import type { FormField } from '$lib/content';

	let {
		fields,
		submitLabel,
		submitMessage
	}: {
		fields: FormField[];
		submitLabel: string;
		submitMessage: string;
	} = $props();

	let submitted = $state(false);
	let errorMessage = $state('');
	let pending = $state(false);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		errorMessage = '';
		submitted = false;
		pending = true;

		const form = event.currentTarget as HTMLFormElement;
		const data = Object.fromEntries(new FormData(form).entries());

		try {
			const res = await fetch('/api/rsvp', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});
			const payload = (await res.json().catch(() => ({}))) as { message?: string; error?: string };
			if (!res.ok) {
				errorMessage = payload.error ?? 'Something went wrong. Please try again.';
				return;
			}
			submitted = true;
			form.reset();
		} catch {
			errorMessage = 'Network error. Please try again.';
		} finally {
			pending = false;
		}
	}
</script>

<form class="rsvp-form" onsubmit={handleSubmit}>
	{#each fields as field}
		<div class="field">
			<label for={field.name}>{field.label}</label>
			{#if field.type === 'select'}
				<select id={field.name} name={field.name} required={field.required} disabled={pending}>
					<option value="">Select…</option>
					{#each field.options ?? [] as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{:else if field.type === 'textarea'}
				<textarea
					id={field.name}
					name={field.name}
					required={field.required}
					rows="3"
					disabled={pending}
				></textarea>
			{:else}
				<input
					id={field.name}
					name={field.name}
					type={field.type}
					placeholder={field.placeholder}
					required={field.required}
					disabled={pending}
				/>
			{/if}
		</div>
	{/each}

	<button type="submit" disabled={pending}>{pending ? 'Sending…' : submitLabel}</button>

	{#if submitted}
		<p class="submit-message" role="status">{submitMessage}</p>
	{/if}
	{#if errorMessage}
		<p class="error-message" role="alert">{errorMessage}</p>
	{/if}
</form>

<style>
	.rsvp-form {
		margin-top: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		width: 100%;
		max-width: 100%;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		min-width: 0;
	}

	label {
		font-size: 0.9rem;
		overflow-wrap: break-word;
	}

	input,
	select,
	textarea {
		font: inherit;
		/* 16px prevents iOS Safari from zooming on focus */
		font-size: 1rem;
		padding: 0.65rem 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 2px;
		background: var(--color-bg);
		color: var(--color-text);
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
	}

	button {
		align-self: stretch;
		font: inherit;
		padding: 0.75rem 1.5rem;
		background: var(--color-accent);
		color: var(--color-on-accent);
		border: none;
		border-radius: 2px;
		cursor: pointer;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.85rem;
	}

	@media (min-width: 480px) {
		button {
			align-self: flex-start;
			padding: 0.65rem 1.5rem;
		}
	}

	button:hover:not(:disabled) {
		opacity: 0.85;
	}

	button:disabled {
		opacity: 0.6;
		cursor: wait;
	}

	.submit-message {
		color: var(--color-moss);
		font-style: italic;
	}

	.error-message {
		color: var(--color-terracotta);
		font-style: italic;
	}
</style>
