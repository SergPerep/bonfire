<script lang="ts">
	import Section from '../BaseUI/Section.svelte';
	import Select from '../BaseUI/Select.svelte';

	export let elVerminEnergBelasting: number;
</script>

<Section title="Vermindering energiebelasting">
	<Select
		bind:value={elVerminEnergBelasting}
		label="Vermindering energiebelasting"
		suffix="€/dag"
		optionList={[
			{
				year: 2022,
				value: -2.25965
			},
			{
				year: 2021,
				value: -1.530302
			}
		]}
	/>
</Section>
