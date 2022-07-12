<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/Store';
	export let gasConsumptie: consumption; /* 1200 m³/jaar */

	const id = 'gas-consumption';
	const sectionTitle = getSectionTitle(id, $sections);

	const checkIfVastLevKostenIsValid = (
		gasConsumptie: consumption
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
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<NumberInput
		label="Consumption per jaar"
		suffix="m³"
		bind:value={gasConsumptie}
		{status}
		{hintStr}
	/>
</Section>
