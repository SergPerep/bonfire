<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasConsumptie = 0; /* 1200 m³/jaar */

	const checkIfVastLevKostenIsValid = (
		gasConsumptie: number | null
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!gasConsumptie) return defaultReturn;
		if (gasConsumptie > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (gasConsumptie < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};
	$: ({ status, hintStr } = checkIfVastLevKostenIsValid(gasConsumptie));
</script>

<Section title="Consumption" sectionStatus={status}>
	<NumberInput label="Consumption per jaar" suffix="m³" bind:value={gasConsumptie} {status} {hintStr}/>
</Section>
