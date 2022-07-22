<script lang="ts">
	export let placeholder = "";
	export let value: number | null = null;
	export let label = 'Label';
	export let prefix: string | null = null;
	export let suffix: string | null = null;
	export let hintStr: string | null = null;
	export let status: Status = null;
	$: error = status === 'error';
	let inputEl: HTMLInputElement;
	let focused = false;
	const handleClickField = () => {
		inputEl.focus();
	};
	const handleFocusInput = () => (focused = true);
	const handleFocusOutInput = () => (focused = false);
</script>

<div class="text-field">
	<label for="number-input">{label}</label>
	<div class="field" on:click={handleClickField} class:focused class:error>
		{#if prefix} <span class="prefix">{prefix}</span> {/if}
		<input
			type="number"
			{placeholder}
			bind:value
			id="#number-input"
			bind:this={inputEl}
			on:focus={handleFocusInput}
			on:focusout={handleFocusOutInput}
		/>
		{#if suffix} <span class="suffix">{suffix}</span> {/if}
	</div>
	{#if hintStr}
		<div class="hint" class:error>{hintStr}</div>
	{/if}
</div>

<style lang="scss">
	.field {
		background-color: colors.$black-a08;
		border: 1px solid transparent;
		border-radius: 8px;
		display: flex;
		align-items: baseline;
		&.focused {
			outline: 2px solid colors.$success;
		}
		&.error{
			border: 1px solid colors.$error;
		}
	}

	label {
		padding-bottom: 8px;
		display: block;
		@include fonts.small;
		color: colors.$black-a60;
	}
	input {
		width: 100%;
		border: none;
		background-color: transparent;
		padding: 12px;
		@include fonts.body;
		&:focus {
			outline: none;
		}
	}
	.prefix,
	.suffix {
		@include fonts.body;
		color: colors.$black-a60;
	}
	.prefix {
		padding-left: 12px;
	}
	.suffix {
		padding-right: 12px;
	}

	.hint{
		@include fonts.small;
		padding-top: 8px;
		color: colors.$black-a60;
		&.error{
			color: colors.$error;
		}
	}
</style>
