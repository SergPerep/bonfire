<script lang="ts">
	import HelpScreen from '../Help/HelpScreen.svelte';
	export let title = 'Section';
	export let status: Status = null;
	export let id: string;
	export let helpScreenTitle = 'Help screen';
	export let isHelpScreenOpen = false;
</script>

<section class:error={status === 'error'} class:success={status === 'success'} {id}>
	<header>
		{#if status === 'success'}
			<span class="material-symbols-outlined solid-icon check"> check_circle </span>
		{:else if status === 'error'}
			<span class="material-symbols-outlined solid-icon error"> error </span>
		{/if}
		<h2>{title}</h2>
	</header>
	<HelpScreen title={helpScreenTitle} isOpen={isHelpScreenOpen}
		><slot name="help-screen" /></HelpScreen
	>
	<slot />
</section>

<style lang="scss">
	section {
		padding: 24px 0 0;
		margin-bottom: 24px;
		border-top: 1px solid colors.$black-a12;
	}
	header {
		display: flex;
		margin-bottom: 12px;
		h2 {
			width: calc(100% - 24px - 8px);
			margin-bottom: 0;
		}
	}
	.material-symbols-outlined {
		&.check,
		&.error {
			margin-right: 8px;
		}
		&.check {
			color: colors.$success;
		}
		&.error {
			color: colors.$error;
		}
	}
</style>
