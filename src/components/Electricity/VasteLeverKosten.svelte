<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	import Link from "../BaseUI/Link.svelte";
	import HelpScreen from '../Help/HelpScreen.svelte';
import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	export let elVasteLevKosten: kosten;

	const id = 'el-vaste-leveringskosten';
	const sectionTitle = getSectionTitle(id, $sections);

	let isHelpScreenOpen = false;
	const openHelpScreen = () => isHelpScreenOpen = true;
	const checkIfElVastLevKostenAreValid = (
		elVasteLevKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		if (elVasteLevKosten && elVasteLevKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (elVasteLevKosten && elVasteLevKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return {
			status: null,
			hintStr: null
		};
	};
	$: ({ status, hintStr } = checkIfElVastLevKostenAreValid(elVasteLevKosten));
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>Fixed costs that are charged by an energy supplier for electricity. They are independent of your consumption and the same every month. <Link onClick={openHelpScreen}>Where to find?</Link> </p>
	<HelpScreen title={`Where to find ${sectionTitle}?`} bind:isOpen={isHelpScreenOpen}>
		
		<CoolblueTarieven isElVasLevKostActive={true} />
	</HelpScreen>
	<NumberInput
		label="Elektriciteit vaste kosten"
		suffix="€/maand"
		bind:value={elVasteLevKosten}
		{status}
		{hintStr}
	/>
</Section>
