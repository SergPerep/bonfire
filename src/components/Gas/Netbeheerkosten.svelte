<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	export let gasNetbeheerKosten: kosten; /* 6.489956 €/maand */

	const id = "gas-netbeheerkosten";
	const sectionTitle = getSectionTitle(id, $sections);

	const checkIfVastLevKostenIsValid = (
		gasNetbeheerKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!gasNetbeheerKosten) return defaultReturn;
		if (gasNetbeheerKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (gasNetbeheerKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};
	$: ({ status, hintStr } = checkIfVastLevKostenIsValid(gasNetbeheerKosten));
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>Costs that are charged by a grid operator for connection and transport of electricity.</p>
	<NumberInput
		label="Gas netbeheerkosten"
		suffix="€/dag"
		bind:value={gasNetbeheerKosten}
		{status}
		{hintStr}
	/>
</Section>
