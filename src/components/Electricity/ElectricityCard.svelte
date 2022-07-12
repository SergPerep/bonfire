<script lang="ts">
	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import Consumption from './Consumption.svelte';
	import VasteLeverKosten from './VasteLeverKosten.svelte';
	import VermBelasting from './VermBelasting.svelte';
	import Netbeheerkosten from './Netbeheerkosten.svelte';
	import calculateElKostenPerJaar from '../../utils/calculateElKostenPerJaar';
	import {sections} from "../../stores/Store";

	/* ===== Elektriciteit ===== */
	let isMeterkastSlim = true;
	const toggleIsMeterkastSlim = () => (isMeterkastSlim = !isMeterkastSlim);

	let elYear = -28.6;
	// let elMonth = elYear / 12;
	let elConsumptieEnkel: consumption = null; /* 911 kWh/jaar */
	let elConsumptieNormaal: consumption = null; /* 507  kWh/jaar */
	let elConsumptieDal: consumption = null; /* 402  kWh/jaar */
	let elEnkelTotVarKosten: kosten = null; /* 0.470799  €/kWh */
	let elNormaalTotVarKosten: kosten = null; /* 0.490280 €/kWh */
	let elDalTotVarKosten: kosten = null; /* 0.445389 €/kWh */
	let elVasteLevKosten: kosten = null;
	let elVerminEnergBelasting = -2.25965;
	let elNetbeheerKosten: kosten = null; /* 6.489956 €/maand */

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

	$: sectionList = $sections.filter(section => section.group === "el");

	$: {
		// console.log({
		// 	isMeterkastSlim,
		// 	elConsumptieEnkel,
		// 	elConsumptieNormaal,
		// 	elConsumptieDal,
		// 	elEnkelTotVarKosten,
		// 	elNormaalTotVarKosten,
		// 	elDalTotVarKosten,
		// 	elVasteLevKosten,
		// 	elVerminEnergBelasting,
		// 	elNetbeheerKosten
		// });
	}

	
</script>

<Card title="⚡️ Elektriciteit" kostenPerJaar={elKostenPerJaar} {sectionList}>
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
