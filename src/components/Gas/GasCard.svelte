<script lang="ts">
	import calculateGasKostenPerJaar from '../../utils/calculateGasKostenPerJaar';

	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import Consumption from './Consumption.svelte';
	import Netbeheerkosten from './Netbeheerkosten.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import VastLeverKosten from './VastLeverKosten.svelte';

	let hasGas = true;
	let gasConsumptie: number | null = null;
	let gasTotVarKosten: number | null = null;
	let gasVasteLevKosten: number | null = null;
	let gasNetbeheerKosten: number | null = null;

	const toggleHasGas = () => (hasGas = !hasGas);
	$: gasKostenPerJaar = calculateGasKostenPerJaar(
		gasConsumptie,
		gasTotVarKosten,
		gasVasteLevKosten,
		gasNetbeheerKosten
	);
</script>

<Card title="🔥 Gas" kostenPerJaar={gasKostenPerJaar}>
	<Toggle text="Household uses gas" isChecked={hasGas} on:click={toggleHasGas} />
	<Consumption bind:gasConsumptie />
	<TotVarKosten bind:gasTotVarKosten />
	<VastLeverKosten bind:gasVasteLevKosten />
	<Netbeheerkosten bind:gasNetbeheerKosten />
</Card>
