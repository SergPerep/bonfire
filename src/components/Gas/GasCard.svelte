<script lang="ts">
	import calculateGasKostenPerJaar from '../../utils/calculateGasKostenPerJaar';

	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import Consumption from './Consumption.svelte';
	import Netbeheerkosten from './Netbeheerkosten.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import VastLeverKosten from './VastLeverKosten.svelte';
	import { sections } from '../../stores/sections';
	import { gasKostenPerJaar } from '../../stores/kostenPerJaar';

	export let hasGas = true;
	let gasConsumptie: consumption = null;
	let gasTotVarKosten: kosten = null;
	let gasVasteLevKosten: kosten = null;
	let gasNetbeheerKosten: kosten = null;

	const toggleHasGas = () => (hasGas = !hasGas);
	$: $gasKostenPerJaar = calculateGasKostenPerJaar(
		hasGas,
		gasConsumptie,
		gasTotVarKosten,
		gasVasteLevKosten,
		gasNetbeheerKosten
	);
	$: sectionList = $sections.filter((section) => section.energyType === 'gas');
</script>

<Card title="🔥 Gas" kostenPerJaar={$gasKostenPerJaar} {sectionList} footerTitle="Totaal gas kosten" isFooterVisible={hasGas}>
	<Toggle text="Household uses gas" isChecked={hasGas} on:click={toggleHasGas} />
	{#if hasGas}
	<Consumption bind:gasConsumptie />
	<TotVarKosten bind:gasTotVarKosten />
	<VastLeverKosten bind:gasVasteLevKosten />
	<Netbeheerkosten bind:gasNetbeheerKosten />
	{/if}
</Card>
