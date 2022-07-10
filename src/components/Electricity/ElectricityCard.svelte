<script lang="ts">
	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import Consumption from './Consumption.svelte';
	import VasteLeverKosten from './VasteLeverKosten.svelte';
	import VermBelasting from './VermBelasting.svelte';
	import Netbeheerkosten from './Netbeheerkosten.svelte';
	import calculateElKostenPerJaar from '../../utils/calculateElKostenPerJaar';

	/* ===== Elektriciteit ===== */
	let isMeterkastSlim = true;
	const toggleIsMeterkastSlim = () => (isMeterkastSlim = !isMeterkastSlim);

	let elYear = -28.6;
	// let elMonth = elYear / 12;
	let elConsumptieEnkel = 0; /* 911 kWh/jaar */
	let elConsumptieNormaal = 0; /* 507  kWh/jaar */
	let elConsumptieDal = 0; /* 402  kWh/jaar */
	let elEnkelTotVarKosten = 0; /* 0.470799  €/kWh */
	let elNormaalTotVarKosten = 0; /* 0.490280 €/kWh */
	let elDalTotVarKosten = 0; /* 0.445389 €/kWh */
	let elVasteLevKosten = 0;
	let elVerminEnergBelasting = -2.25965;
	let elNetbeheerKosten = 0; /* 6.489956 €/maand */

	$: elKostenPerJaar = calculateElKostenPerJaar({
		isMeterkastSlim,
		elConsumptieEnkel,
		elConsumptieNormaal,
		elConsumptieDal,
		elEnkelTotVarKosten,
		elNormaalTotVarKosten,
		elDalTotVarKosten,
		elVasteLevKosten,
		elVerminEnergBelasting,
		elNetbeheerKosten
	});

	$: {
		console.log({
		isMeterkastSlim,
		elConsumptieEnkel,
		elConsumptieNormaal,
		elConsumptieDal,
		elEnkelTotVarKosten,
		elNormaalTotVarKosten,
		elDalTotVarKosten,
		elVasteLevKosten,
		elVerminEnergBelasting,
		elNetbeheerKosten
	});
	}
</script>

<Card title="⚡️ Elektriciteit" kostenPerJaar={elKostenPerJaar}>
	<Toggle text="Slim meterkast" isChecked={isMeterkastSlim} on:click={toggleIsMeterkastSlim} />
	<Consumption
		{isMeterkastSlim}
		bind:elConsumptieEnkel
		bind:elConsumptieNormaal
		bind:elConsumptieDal
	/>
	<TotVarKosten
		bind:isMeterkastSlim
		bind:elEnkelTotVarKosten
		bind:elNormaalTotVarKosten
		bind:elDalTotVarKosten
	/>
	<VasteLeverKosten bind:elVasteLevKosten />
	<VermBelasting bind:elVerminEnergBelasting />
	<Netbeheerkosten bind:elNetbeheerKosten />
</Card>
