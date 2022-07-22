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

	const checkIfVastLevKostenIsValid = (
		gasNetbeheerKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!gasNetbeheerKosten) return defaultReturn;
		if (gasNetbeheerKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (gasNetbeheerKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};
	$: ({ status, hintStr } = checkIfVastLevKostenIsValid(gasNetbeheerKosten));
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
		{status}
		{hintStr}
	/>
</Section>
