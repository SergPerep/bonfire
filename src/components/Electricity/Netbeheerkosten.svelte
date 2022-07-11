<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sectionStatuses } from '../../stores/Store';
	export let elNetbeheerKosten: kosten; /* 6.489956 €/maand */

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
	$: {
		$sectionStatuses.elNetbeheerkosten = status;
	}
</script>

<Section title="Netbeheerkosten" id="el-netbeheerkosten" sectionStatus={$sectionStatuses.elNetbeheerkosten}>
	<NumberInput
		label="Elektriciteit netbeheerkosten"
		suffix="€/dag"
		bind:value={elNetbeheerKosten}
		{status}
		{hintStr}
	/>
</Section>
