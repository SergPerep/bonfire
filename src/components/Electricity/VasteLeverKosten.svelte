<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	export let elVasteLevKosten: kosten;

	const id = 'el-vaste-leveringskosten';
	const sectionTitle = getSectionTitle(id, $sections);
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
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<NumberInput
		label="Elektriciteit vaste kosten"
		suffix="€/maand"
		bind:value={elVasteLevKosten}
		{status}
		{hintStr}
	/>
</Section>
