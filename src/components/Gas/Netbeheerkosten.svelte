<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	
	export let gasNetbeheerKosten: kosten; /* 6.489956 €/maand */

	let isHelpScreenOpen = false;

	const id = "gas-netbeheerkosten";
	const sectionTitle = getSectionTitle(id, $sections);

	let status: Status = null;
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>Costs that are charged by a grid operator for connection and transport of electricity. <Link onClick={() => isHelpScreenOpen = true}>Where to find?</Link></p>
	<HelpScreen title={`Where to find ${sectionTitle}`} bind:isOpen={isHelpScreenOpen}>
		<p>Find the document with energy rates (tarieven). Energy supplier should have sent it after you signed the contract. See an example below.</p>
		<p>Locate section about gas and look for <b>Netbeheerkosten</b> there. Don't confuse it with <b>Netbeheerkosten</b> for electricity.</p>
		<CoolblueTarieven isGasNetBehKostActive={true} />
	</HelpScreen>
	<NumberInput
		label="Gas netbeheerkosten"
		suffix="€/dag"
		bind:value={gasNetbeheerKosten}
		bind:status
		min={0}
		max={20}
		placeholder="e.g. 0.512435"
	/>
</Section>
