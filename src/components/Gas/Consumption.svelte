<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	export let gasConsumptie: consumption; /* 1200 m³/jaar */

	const id = 'gas-consumption';
	const sectionTitle = getSectionTitle(id, $sections);

	let status: Status = null;
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>How much gas you consume within a year.</p>
	<p>You should have your own numbers. If you don't have any, visit <a href="https://www.milieucentraal.nl/energie-besparen/inzicht-in-je-energierekening/gemiddeld-energieverbruik/#:~:text=Een%20Nederlands%20huishouden%20verbruikt%20jaarlijks,zijn%20in%202022%20grote%20verschillen.">www.milieucentraal.nl</a> to find average numbers for a household similar to yours.</p>
	<NumberInput
		label="Consumption per jaar"
		suffix="m³"
		bind:value={gasConsumptie}
		bind:status
		min={0}
		max={10000}
		placeholder="e.g. 1200"
	/>
</Section>
