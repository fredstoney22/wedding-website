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

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		submitted = true;
	}
</script>

<form class="rsvp-form" onsubmit={handleSubmit}>
	{#each fields as field}
		<div class="field">
			<label for={field.name}>{field.label}</label>
			{#if field.type === 'select'}
				<select id={field.name} name={field.name} required={field.required}>
					{#each field.options ?? [] as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{:else if field.type === 'textarea'}
				<textarea id={field.name} name={field.name} required={field.required} rows="3"></textarea>
			{:else}
				<input
					id={field.name}
					name={field.name}
					type={field.type}
					placeholder={field.placeholder}
					required={field.required}
				/>
			{/if}
		</div>
	{/each}

	<button type="submit">{submitLabel}</button>

	{#if submitted}
		<p class="submit-message" role="status">{submitMessage}</p>
	{/if}
</form>

<style>
	.rsvp-form {
		margin-top: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	label {
		font-size: 0.9rem;
	}

	input,
	select,
	textarea {
		font: inherit;
		padding: 0.65rem 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 2px;
		background: var(--color-bg);
	}

	button {
		align-self: flex-start;
		font: inherit;
		padding: 0.65rem 1.5rem;
		background: var(--color-accent);
		color: var(--color-bg);
		border: none;
		border-radius: 2px;
		cursor: pointer;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.85rem;
	}

	button:hover {
		opacity: 0.85;
	}

	.submit-message {
		color: var(--color-text-muted);
		font-style: italic;
	}
</style>
