<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import {sections, getSectionStatus, getSectionTitle} from "../../stores/sections";
	import Link from '../BaseUI/Link.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	
	export let gasTotVarKosten: kosten; /* 0.490280 €/m³ */
	
	let isHelpScreenOpen = false;

	const id = 'gas-totale-variabele-kosten';
	const sectionTitle = getSectionTitle(id, $sections);

	const checkIfVastLevKostenIsValid = (
		gasTotVarKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!gasTotVarKosten) return defaultReturn;
		if (gasTotVarKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (gasTotVarKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};
	$: ({ status, hintStr } = checkIfVastLevKostenIsValid(gasTotVarKosten));
	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>Gas rates charged by an energy supplier.<Link onClick={() => isHelpScreenOpen = true}>Where to find?</Link></p>
	<HelpScreen title={`Where to find ${sectionTitle}`} bind:isOpen={isHelpScreenOpen}>
		<CoolblueTarieven isGasTotVarKostTarActive={true} />
	</HelpScreen>
	<NumberInput
		label="Gas vaste kosten"
		bind:value={gasTotVarKosten}
		suffix="kWh/m³"
		{status}
		{hintStr}
	/>
</Section>
