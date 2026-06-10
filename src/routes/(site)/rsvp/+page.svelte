<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ProseBlock from '$lib/components/ProseBlock.svelte';
	import RsvpForm from '$lib/components/RsvpForm.svelte';
	import { getPage, pageTitle } from '$lib/content';

	const content = getPage('/rsvp/');
</script>

<svelte:head>
	<title>{pageTitle('RSVP')}</title>
</svelte:head>

{#if content?.type === 'rsvp'}
	<div class="page-content">
		<PageTitle title={content.title} />
		<ProseBlock paragraphs={content.intro} />
		<RsvpForm
			fields={content.fields}
			submitLabel={content.submitLabel}
			submitMessage={content.submitMessage}
		/>
	</div>
{/if}
