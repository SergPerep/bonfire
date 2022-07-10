<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasNetbeheerKosten: number | null; /* 6.489956 €/maand */

	const checkIfVastLevKostenIsValid = (
		gasNetbeheerKosten: number | null
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
</script>

<Section title="Netbeheerkosten" sectionStatus={status}>
	<NumberInput
		label="Gas netbeheerkosten"
		suffix="€/dag"
		bind:value={gasNetbeheerKosten}
		{status}
		{hintStr}
	/>
</Section>
