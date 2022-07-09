<script lang="ts">
	let placeholder: string;
	export let value = 0;
	export let label = 'Label';
	export let prefix: string | null = null;
	export let suffix: string | null = null;
	let inputEl: HTMLInputElement;
	let focused = false;
	const handleClickField = () => {
		inputEl.focus();
	};
	const handleFocusInput = () => focused = true;
	const handleFocusOutInput = () => focused = false;
</script>

<div class="text-field">
	<label for="number-input">{label}</label>
	<div class="field" on:click={handleClickField} class:focused>
		{#if prefix} <span class="prefix">{prefix}</span> {/if}
		<input type="number" {placeholder} bind:value id="#number-input" bind:this={inputEl} on:focus={handleFocusInput} on:focusout={handleFocusOutInput}/>
		{#if suffix} <span class="suffix">{suffix}</span> {/if}
	</div>
</div>

<style lang="scss">
	.field {
		background-color: rgba(0, 0, 0, 0.08);
		border-radius: 8px;
		display: flex;
		align-items: baseline;
		&.focused {
			outline: 2px solid colors.$success;
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
</style>
