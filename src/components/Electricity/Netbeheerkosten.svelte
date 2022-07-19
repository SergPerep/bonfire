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
	$: sectionTitle = getSectionTitle(id, $sections);
</script>

<Section title={sectionTitle} {id} status={sectionStatus}>
	<p>Costs that are charged by a grid operator for connection and transport of electricity. <Link onClick={openHelpScreen}>Where to find?</Link></p>
	<HelpScreen title={`Where to find ${sectionTitle}`} bind:isOpen={isHelpScreenOpen}>
		<CoolblueTarieven isElNetBehKostActive={true}/>
	</HelpScreen>
	<NumberInput
		label="Elektriciteit netbeheerkosten"
		suffix="€/dag"
		bind:value={elNetbeheerKosten}
		{status}
		{hintStr}
	/>
</Section>
