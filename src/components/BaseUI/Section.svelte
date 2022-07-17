<script lang="ts">
	export let title = 'Section';
	export let status: Status = null;
	export let id: string;
</script>

<section class:error={status === "error"} class:success={status === "success"} {id}>
	<header>
		{#if status === 'success'}
			<span class="material-symbols-outlined icon-check"> check_circle </span>
		{:else if status === 'error'}
			<span class="material-symbols-outlined icon-error"> error </span>
		{/if}
		<h2>{title}</h2>
	</header>
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
	.icon-check,
	.icon-error {
		margin-right: 8px;
	}
	.icon-check {
		color: colors.$success;
	}
	.icon-error {
		color: colors.$error;
	}
</style>
