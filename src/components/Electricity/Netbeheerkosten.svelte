<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/Store';
	export let elNetbeheerKosten: kosten; /* 6.489956 €/maand */
	const id = 'el-netbeheerkosten';

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
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
	$: title = getSectionTitle(id, $sections);
</script>

<Section {title} {id} status={sectionStatus}>
	<NumberInput
		label="Elektriciteit netbeheerkosten"
		suffix="€/dag"
		bind:value={elNetbeheerKosten}
		{status}
		{hintStr}
	/>
</Section>
