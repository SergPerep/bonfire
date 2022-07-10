<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasVasteLevKosten: kosten; /* 6.489956 €/maand */

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
</script>

<Section title="Vaste leveringskosten" sectionStatus={status}>
	<NumberInput
		label="Gas vaste kosten"
		suffix="€/maand"
		bind:value={gasVasteLevKosten}
		{status}
		{hintStr}
	/>
</Section>
