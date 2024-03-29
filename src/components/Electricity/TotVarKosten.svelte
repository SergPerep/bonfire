<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import {
		sections,
		getSectionTitle,
		getSectionStatus,
		getIsHelpScreenOpen
	} from '../../stores/sections';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	import Link from '../BaseUI/Link.svelte';
	export let isMeterkastSlim = false;
	export let elEnkelTotVarKosten: kosten = null; /* 0.470799  €/kWh */
	export let elNormaalTotVarKosten: kosten = null; /* 0.490280 €/kWh */
	export let elDalTotVarKosten: kosten = null; /* 0.445389 €/kWh */

	const id = 'el-totale-variabele-kosten';
	const sectionTitle = getSectionTitle(id, $sections);

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
	const openHelpScreen = () => sections.openHelpScreen(id);

	let normaalStatus: Status = null;
	let dalStatus: Status = null;
	let enkelStatus: Status = null;

	$: sections.setStatus(
		id,
		checkIfSectionIsValid(isMeterkastSlim, normaalStatus, dalStatus, enkelStatus)
	);
	$: sectionStatus = getSectionStatus(id, $sections);
	$: isHelpScreenOpen = getIsHelpScreenOpen(id, $sections);
</script>

<Section
	title={sectionTitle}
	status={sectionStatus}
	{id}
	helpScreenTitle={`Where to find ${sectionTitle}?`}
	{isHelpScreenOpen}
>
	<p>
		Electricity rates that are charged by an energy supplier. <Link onClick={openHelpScreen}
			>Where to find?</Link
		>
	</p>
	<div slot="help-screen">
		<p>
			Find the document with energy rates (tarieven). Energy supplier should have sent it after you
			signed the contract. See an example below.
		</p>
		<p>Locate section about electricity and look for <b>Totale variabele kosten</b> there.</p>
		<p>
			If your meterkast is not slim, meaning it recieves only one parameter, use <b>enkeltarief</b>.
			If your meterkast is slim, meaning it recieves two parameters, use both <b>normaaltarief</b>
			(day rate) and <b>daltarief</b> (night rate).
		</p>
		<CoolblueTarieven
			isElTotVarKostNormTarActive={true}
			isElTotVarKostDalTarActive={true}
			isElTotVarKostEnkTarActive={true}
		/>
	</div>
	{#if isMeterkastSlim}
		<div class="container">
			<div class="col-2">
				<NumberInput
					label="Elektriciteit Normaal"
					suffix="€/kWh"
					bind:value={elNormaalTotVarKosten}
					bind:status={normaalStatus}
					min={0}
					max={10}
					placeholder="e.g 0.490280"
				/>
			</div>
			<div class="col-2">
				<NumberInput
					label="Elektriciteit Dal"
					suffix="€/kWh"
					bind:value={elDalTotVarKosten}
					bind:status={dalStatus}
					min={0}
					max={10}
					placeholder="e.g 0.445389"
				/>
			</div>
		</div>
	{:else}
		<NumberInput
			label="Elektriciteit Enkel"
			suffix="€/kWh"
			bind:value={elEnkelTotVarKosten}
			bind:status={enkelStatus}
			min={0}
			max={20}
			placeholder="e.g. 0.470799"
		/>
	{/if}
</Section>
