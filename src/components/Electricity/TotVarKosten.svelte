<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionTitle, getSectionStatus } from '../../stores/sections';
	import HelpScreen from '../Help/HelpScreen.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	import Link from "../BaseUI/Link.svelte";
	export let isMeterkastSlim = false;
	export let elEnkelTotVarKosten: kosten = null; /* 0.470799  €/kWh */
	export let elNormaalTotVarKosten: kosten = null; /* 0.490280 €/kWh */
	export let elDalTotVarKosten: kosten = null; /* 0.445389 €/kWh */

	const id = 'el-totale-variabele-kosten';
	const sectionTitle = getSectionTitle(id, $sections);

	const checkIfTotVarKostenAreValid = (
		totVarKosten: kosten
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!totVarKosten) return defaultReturn;
		if (totVarKosten > 0)
			return {
				status: 'success',
				hintStr: null
			};
		if (totVarKosten < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		return defaultReturn;
	};

	const checkIfSectionIsValid = (
		isMeterkastSlim: boolean,
		normaalStatus: Status,
		dalStatus: Status,
		enkelStatus: Status
	): Status => {
		if (!isMeterkastSlim) return enkelStatus;
		if (normaalStatus === 'error' || dalStatus === 'error') return 'error';
		if (normaalStatus === 'success' && dalStatus === 'success') return 'success';
		return null;
	};
	let isHelpScreenOpen = false;
	const openHelpScreen = () => {
		isHelpScreenOpen = true;
	};

	$: ({ status: normaalStatus, hintStr: normaalHintStr } =
		checkIfTotVarKostenAreValid(elNormaalTotVarKosten));
	$: ({ status: dalStatus, hintStr: dalHintStr } = checkIfTotVarKostenAreValid(elDalTotVarKosten));
	$: ({ status: enkelStatus, hintStr: enkelHintStr } =
		checkIfTotVarKostenAreValid(elEnkelTotVarKosten));
	$: sections.setStatus(
		id,
		checkIfSectionIsValid(isMeterkastSlim, normaalStatus, dalStatus, enkelStatus)
	);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>Electricity rates that are charged by an energy supplier. <Link onClick={openHelpScreen}>Where to find?</Link></p>
	<HelpScreen title={`Where to find ${sectionTitle}?`} bind:isOpen={isHelpScreenOpen}>
		<p>Find the document with energy rates (tarieven). Energy supplier should have sent it after you signed the contract. See an example below.</p>
		<p>Locate section about electricity and look for <b>Totale variabele kosten</b> there.</p>
		<p>If your meterkast is not slim, meaning it recieves only one parameter, use <b>enkeltarief</b>. If your meterkast is slim, meaning it recieves two parameters, use both <b>normaaltarief</b> (day rate) and <b>daltarief</b> (night rate).</p> 
		<CoolblueTarieven
			isElTotVarKostNormTarActive={true}
			isElTotVarKostDalTarActive={true}
			isElTotVarKostEnkTarActive={true}
		/>
	</HelpScreen>
	{#if isMeterkastSlim}
		<div class="container">
			<div class="col-2">
				<NumberInput
					label="Elektriciteit Normaal"
					suffix="€/kWh"
					bind:value={elNormaalTotVarKosten}
					status={normaalStatus}
					hintStr={normaalHintStr}
				/>
			</div>
			<div class="col-2">
				<NumberInput
					label="Elektriciteit Dal"
					suffix="€/kWh"
					bind:value={elDalTotVarKosten}
					status={dalStatus}
					hintStr={dalHintStr}
				/>
			</div>
		</div>
	{:else}
		<NumberInput
			label="Elektriciteit Enkel"
			suffix="€/kWh"
			bind:value={elEnkelTotVarKosten}
			status={enkelStatus}
			hintStr={enkelHintStr}
		/>
	{/if}
</Section>
