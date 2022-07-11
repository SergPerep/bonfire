<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sectionStatuses } from '../../stores/Store';
	export let elVasteLevKosten: kosten;
	const checkIfElVastLevKostenAreValid = (
		elVasteLevKosten: kosten
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
	$: {
		$sectionStatuses.elVasteLeverKosten = status;
	}
</script>

<Section title="Vaste leveringskosten" id="el-vaste-leveringskosten" sectionStatus={$sectionStatuses.elVasteLeverKosten}>
	<NumberInput
		label="Elektriciteit vaste kosten"
		suffix="€/maand"
		bind:value={elVasteLevKosten}
		{status}
		{hintStr}
	/>
</Section>
