<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/gifts/');
</script>

<svelte:head>
	<title>{pageTitle('Gifts')}</title>
</svelte:head>

{#if content?.type === 'gifts'}
	<div class="page-content">
		<PageTitle title={content.title} level={3} />
		<ProseBlock paragraphs={content.paragraphs} />
		<dl class="bank-details">
			{#each content.bankDetails as detail}
				<div class="bank-row">
					<dt>{detail.label}</dt>
					<dd>{detail.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
{/if}

<style>
	.bank-details {
		margin: var(--space-md) 0 0;
	}

	.bank-row {
		margin-bottom: var(--space-sm);
	}

	dt {
		font-weight: 600;
		display: inline;
	}

	dd {
		display: inline;
		margin: 0;
	}
</style>
