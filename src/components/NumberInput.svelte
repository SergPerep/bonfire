<script lang="ts">
	import Indicator from './Indicator.svelte';
	let placeholder: string;
	let value: number;
	export let label = 'Label';
</script>

<div class="text-field">
	<label for="number-input">{label}</label>
	<div class="field">
		<input type="number" {placeholder} bind:value id="#number-input" />
		<Indicator />
	</div>
</div>

<style lang="scss">
	label{
        padding-bottom: 12px;
        display: block;
		@include fonts.body;
    }
	.field {
		background-color: rgba(0, 0, 0, 0.08);
		border-radius: 8px;
        display: flex;
		margin-bottom: 16px;
	}
	input {
		width: 100%;
		border: none;
        background-color: transparent;
        padding: 12px;
	}
</style>
