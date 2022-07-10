<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasTotVarKosten = 0; /* 0.490280 €/m³ */
</script>

<Section title="Totale variabele kosten">
	<NumberInput label="Gas vaste kosten" bind:value={gasTotVarKosten} suffix="kWh/m³" />
</Section>
