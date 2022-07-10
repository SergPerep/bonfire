<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasConsumptie = 0; /* 1200 m³/jaar */
</script>

<Section title="Consumption">
	<NumberInput label="Consumption per jaar" suffix="m³" bind:value={gasConsumptie} />
</Section>
