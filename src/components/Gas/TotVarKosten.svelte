<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import {
		sections,
		getSectionStatus,
		getSectionTitle,
		getIsHelpScreenOpen
	} from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';

	export let gasTotVarKosten: kosten; /* 0.490280 €/m³ */

	const id = 'gas-totale-variabele-kosten';
	const sectionTitle = getSectionTitle(id, $sections);
	const openHelpScreen = () => sections.openHelpScreen(id);

	let status: Status = null;

	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
	$: isHelpScreenOpen = getIsHelpScreenOpen(id, $sections);
</script>

<Section
	title={sectionTitle}
	status={sectionStatus}
	{id}
	helpScreenTitle={`Where to find ${sectionTitle}`}
	{isHelpScreenOpen}
>
	<p>
		Gas rates charged by an energy supplier. <Link onClick={openHelpScreen}>Where to find?</Link>
	</p>
	<div slot="help-screen">
		<p>
			Find the document with energy rates (tarieven). Energy supplier should have sent it after you
			signed the contract. See an example below.
		</p>
		<p>Locate section about electricity and look for <b>Totale variabele kosten</b> there.</p>
		<CoolblueTarieven isGasTotVarKostTarActive={true} />
	</div>
	<NumberInput
		label="Gas vaste kosten"
		bind:value={gasTotVarKosten}
		suffix="€/m³"
		bind:status
		min={0}
		max={20}
		placeholder="e.g. 1.927312"
	/>
</Section>
