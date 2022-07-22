<script lang="ts">
	import Section from '../BaseUI/Section.svelte';
	import Select from '../BaseUI/Select.svelte';
	import { getSectionStatus, getSectionTitle, sections } from '../../stores/sections';
	import Link from "../BaseUI/Link.svelte";
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';
	export let elVerminEnergBelasting: number;
	const id = 'el-vermindering-energiebelasting';
	const sectionTitle = getSectionTitle(id, $sections);

	let isHelpScreenOpen = false;
	const openHelpScreen = () => isHelpScreenOpen = true;

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
	<p>Tax reduction for electricity. Different every year. <Link onClick={openHelpScreen}>Where to find?</Link></p>
	<HelpScreen bind:isOpen={isHelpScreenOpen} title={`Where to find ${sectionTitle}`}>
		<p>The Goverment sets tax reduction for electricity every year. But it still can be tricky to find and calculate.</p>
		<p>The most reliable way still is to look into the document with rates, that you get after you signed up contract with energy supplier, and locate <b>Vermindering energiebelasting</b> there.</p>
		<CoolblueTarieven isElVermEnrgBelastActive={true} />
	</HelpScreen>
	<Select
		bind:value={elVerminEnergBelasting}
		label="Vermindering energiebelasting"
		suffix="€/dag"
		{optionList}
	/>
</Section>
