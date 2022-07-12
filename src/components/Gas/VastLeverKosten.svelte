<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/Store';
	export let gasVasteLevKosten: kosten; /* 6.489956 €/maand */

	const id = 'gas-vaste-leveringskosten';
	const sectionTitle = getSectionTitle(id, $sections);

	const checkIfVastLevKostenIsValid = (
		gasVasteLevKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!gasVasteLevKosten) return defaultReturn;
		if (gasVasteLevKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (gasVasteLevKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};
	$: ({ status, hintStr } = checkIfVastLevKostenIsValid(gasVasteLevKosten));
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<NumberInput
		label="Gas vaste kosten"
		suffix="€/maand"
		bind:value={gasVasteLevKosten}
		{status}
		{hintStr}
	/>
</Section>
