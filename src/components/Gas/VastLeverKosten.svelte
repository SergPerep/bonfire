<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle } from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	import HelpScreen from '../Help/HelpScreen.svelte';

	export let gasVasteLevKosten: kosten; /* 6.489956 €/maand */

	let isHelpScreenOpen = false;

	const id = 'gas-vaste-leveringskosten';
	const sectionTitle = getSectionTitle(id, $sections);

	let status: Status = null;

	$: sections.setStatus(id, status);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>Fixed costs that atr charged by your energy supplier for gas. They are independent of your consumption and the same every month.
		<Link onClick={() => isHelpScreenOpen = true}>Where to find?</Link>
	</p>
	<HelpScreen title={`Where to find ${sectionTitle}`} bind:isOpen={isHelpScreenOpen}>
		<p>Find the document with energy rates (tarieven). Energy supplier should have sent it after you signed the contract. See an example below.</p>
		<p>Locate section about gas and look for <b>Vaste leveringskosten</b> there. Don't confuse them with <b>Vaste leveringskosten</b> in electricity section. They often have the same numbers, but not always</p> 
		<CoolblueTarieven isGasVasLevKostActive={true} />
	</HelpScreen>
	<NumberInput
		label="Gas vaste kosten"
		suffix="€/maand"
		bind:value={gasVasteLevKosten}
		bind:status
		min={0}
		max={20}
		placeholder="e.g. 6.489956"
	/>
</Section>
