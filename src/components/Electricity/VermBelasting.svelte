<script lang="ts">
	import Section from '../BaseUI/Section.svelte';
	import Select from '../BaseUI/Select.svelte';
	import {
		getIsHelpScreenOpen,
		getSectionStatus,
		getSectionTitle,
		sections
	} from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';
	export let elVerminEnergBelasting: number;
	const id = 'el-vermindering-energiebelasting';
	const sectionTitle = getSectionTitle(id, $sections);

	const openHelpScreen = () => sections.openHelpScreen(id);

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
	$: isHelpScreenOpen = getIsHelpScreenOpen(id, $sections);
</script>

<Section
	title={sectionTitle}
	status={sectionStatus}
	{id}
	{isHelpScreenOpen}
	helpScreenTitle={`Where to find ${sectionTitle}`}
>
	<p>
		Tax reduction for electricity. Different every year. <Link onClick={openHelpScreen}
			>Where to find?</Link
		>
	</p>
	<div slot="help-screen">
		<p>
			The Goverment sets tax reduction for electricity every year. But it still can be tricky to
			find and calculate.
		</p>
		<p>
			The most reliable way still is to look into the document with rates, that you get after you
			signed up contract with energy supplier, and locate <b>Vermindering energiebelasting</b> there.
		</p>
		<CoolblueTarieven isElVermEnrgBelastActive={true} />
	</div>
	<Select
		bind:value={elVerminEnergBelasting}
		label="Vermindering energiebelasting"
		suffix="€/dag"
		{optionList}
	/>
</Section>
