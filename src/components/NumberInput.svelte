<script lang="ts">
    import Indicator from "./Indicator.svelte";
	let placeholder: string;
	let value: number;
    let label = "Label";
</script>

<div class="text-field">
    <label for="number-input">{label}</label>
	<div class="field">
		<input type="number" {placeholder} bind:value id="#number-input"/>
		<Indicator />
	</div>
</div>

<style>
    label{
        padding-bottom: 12px;
        display: block;
    }
	.field {
		background-color: rgba(0, 0, 0, 0.08);
		border-radius: 8px;
        display: flex;
	}
	input {
		width: 100%;
		border: none;
        background-color: transparent;
        padding: 12px;
	}
</style>
