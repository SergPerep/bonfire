<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let elNetbeheerKosten = 0; /* 6.489956 €/maand */

	const checkIfNetbeheerkostenAreValid = (
		elNetbeheerKosten: kosten
	): { status: Status; hintStr: string | null } => {
		if (elNetbeheerKosten && elNetbeheerKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (elNetbeheerKosten && elNetbeheerKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return {
			status: null,
			hintStr: null
		};
	};

	$: ({ status, hintStr } = checkIfNetbeheerkostenAreValid(elNetbeheerKosten));
</script>

<Section title="Netbeheerkosten" sectionStatus={status}>
	<NumberInput
		label="Elektriciteit netbeheerkosten"
		suffix="€/dag"
		bind:value={elNetbeheerKosten}
		{status}
		{hintStr}
	/>
</Section>
