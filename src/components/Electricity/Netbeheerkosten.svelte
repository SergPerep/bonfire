<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';

	export let elNetbeheerKosten: kosten; /* 6.489956 €/maand */
	const id = 'el-netbeheerkosten';
	let isHelpScreenOpen = false;
	const openHelpScreen = () => isHelpScreenOpen = true;

	let status: Status = null;

	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
	$: sectionTitle = getSectionTitle(id, $sections);
</script>

<Section title={sectionTitle} {id} status={sectionStatus}>
	<p>Costs that are charged by a grid operator for connection and transport of electricity. <Link onClick={openHelpScreen}>Where to find?</Link></p>
	<HelpScreen title={`Where to find ${sectionTitle}`} bind:isOpen={isHelpScreenOpen}>
		<p>Find the document with energy rates (tarieven). Energy supplier should have sent it after you signed the contract. See an example below.</p>
		<p>Locate section about electricity and look for <b>Netbeheerkosten</b> there. Don't confuse it with <b>Netbeheerkosten</b> for gas.</p>
		<CoolblueTarieven isElNetBehKostActive={true}/>
	</HelpScreen>
	<NumberInput
		label="Elektriciteit netbeheerkosten"
		suffix="€/dag"
		bind:value={elNetbeheerKosten}
		bind:status
		min={0}
		max={20}
		placeholder="e.g. 0.696597"
	/>
</Section>
