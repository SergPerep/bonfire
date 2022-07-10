<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let elVasteLevKosten: number | null;
	const checkIfElVastLevKostenAreValid = (
		elVasteLevKosten: number | null
	): {
		status: Status;
		hintStr: string | null;
	} => {
		if (elVasteLevKosten && elVasteLevKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (elVasteLevKosten && elVasteLevKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return {
			status: null,
			hintStr: null
		};
	};
	$: ({ status, hintStr } = checkIfElVastLevKostenAreValid(elVasteLevKosten));
</script>

<Section title="Vaste leveringskosten" sectionStatus={status}>
	<NumberInput
		label="Elektriciteit vaste kosten"
		suffix="€/maand"
		bind:value={elVasteLevKosten}
		{status}
		{hintStr}
	/>
</Section>
