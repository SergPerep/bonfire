<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasTotVarKosten: kosten; /* 0.490280 €/m³ */

	const checkIfVastLevKostenIsValid = (
		gasTotVarKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!gasTotVarKosten) return defaultReturn;
		if (gasTotVarKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (gasTotVarKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};
	$: ({ status, hintStr } = checkIfVastLevKostenIsValid(gasTotVarKosten));
</script>

<Section title="Totale variabele kosten" sectionStatus={status}>
	<NumberInput
		label="Gas vaste kosten"
		bind:value={gasTotVarKosten}
		suffix="kWh/m³"
		{status}
		{hintStr}
	/>
</Section>
