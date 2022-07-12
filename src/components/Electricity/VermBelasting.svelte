<script lang="ts">
	import Section from '../BaseUI/Section.svelte';
	import Select from '../BaseUI/Select.svelte';
	import { getSectionStatus, getSectionTitle, sections } from '../../stores/Store';
	
	export let elVerminEnergBelasting: number;
	const id = 'el-vermindering-energiebelasting';
	const sectionTitle = getSectionTitle(id, $sections);

	const optionList = [
		{
			year: 2022,
			value: -2.25965
		},
		{
			year: 2021,
			value: -1.530302
		}
	];
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<Select
		bind:value={elVerminEnergBelasting}
		label="Vermindering energiebelasting"
		suffix="€/dag"
		{optionList}
	/>
</Section>
