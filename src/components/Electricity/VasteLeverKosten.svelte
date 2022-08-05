<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionStatus, getSectionTitle, getIsHelpScreenOpen } from '../../stores/sections';
	import Link from '../BaseUI/Link.svelte';
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
	export let elVasteLevKosten: kosten;

	const id = 'el-vaste-leveringskosten';
	const sectionTitle = getSectionTitle(id, $sections);

	const openHelpScreen = () => sections.openHelpScreen(id);

	export let status: Status = null;
	$: sections.setStatus(id, status);
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
		Fixed costs that are charged by an energy supplier for electricity. They are independent of your
		consumption and the same every month. <Link onClick={openHelpScreen}>Where to find?</Link>
	</p>
	<div slot="help-screen">
		<p>
			Find the document with energy rates (tarieven). Energy supplier should have sent it after you
			signed the contract. See an example below.
		</p>
		<p>
			Locate section about electricity and look for <b>Vaste leveringskosten</b> there. Don't
			confuse them with <b>Vaste leveringskosten</b> in gas section. They often have the same numbers,
			but not always
		</p>
		<CoolblueTarieven isElVasLevKostActive={true} />
	</div>
	<NumberInput
		label="Elektriciteit vaste kosten"
		suffix="€/maand"
		bind:value={elVasteLevKosten}
		min={0}
		max={20}
		bind:status
		placeholder="e.g. 6.489956"
	/>
</Section>
