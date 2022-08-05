<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle, getIsHelpScreenOpen } from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';

	export let elNetbeheerKosten: kosten; /* 6.489956 €/maand */
	
	const id = 'el-netbeheerkosten';
	const openHelpScreen = () => sections.openHelpScreen(id);
	let status: Status = null;

	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
	$: sectionTitle = getSectionTitle(id, $sections);
	$: isHelpScreenOpen = getIsHelpScreenOpen(id, $sections);
</script>

<Section title={sectionTitle} {id} status={sectionStatus} helpScreenTitle={`Where to find ${sectionTitle}`} {isHelpScreenOpen}>
	<p>Costs that are charged by a grid operator for connection and transport of electricity. <Link onClick={openHelpScreen}>Where to find?</Link></p>
	<div slot="help-screen">
		<p>Find the document with energy rates (tarieven). Energy supplier should have sent it after you signed the contract. See an example below.</p>
		<p>Locate section about electricity and look for <b>Netbeheerkosten</b> there. Don't confuse it with <b>Netbeheerkosten</b> for gas.</p>
		<CoolblueTarieven isElNetBehKostActive={true}/>
	</div>
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
