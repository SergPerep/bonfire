<script>
	export let title = 'Where to find rates';
	export let isOpen = false;

	const handleClickClose = () => isOpen = false;
	const handleClickOverlay = () => isOpen = false;
</script>

{#if isOpen}
	<div class="overlay" on:click={handleClickOverlay}>
		<div class="popup" on:click|stopPropagation>
			<header>
				<h2>{title}</h2>
				<div class="icon" on:click={handleClickClose}><span class="material-symbols-outlined solid-icon"> close </span></div>
			</header>
			<div class="body">
				<slot></slot>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	header {
		display: flex;
		border-bottom: 1px solid colors.$black-a12;
		padding: 24px 24px 16px;
		h2 {
			@include fonts.h3;
			width: calc(100% - 24px - 8px);
			margin-bottom: 0;
		}
		.icon {
			width: 24px;
			height: 24px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 6px;
			color: colors.$black-a60;
			cursor: pointer;
			&:hover {
				color: black;
			}
		}
	}
	.overlay {
		background-color: colors.$black-a60;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		padding: 24px 16px;

		overflow-y: scroll;
	}
	.popup {
		background-color: white;
		border-radius: 16px;

		width: 900px;
		margin: 0 auto;
		.body {
			padding: 24px;
		}
	}
</style>
