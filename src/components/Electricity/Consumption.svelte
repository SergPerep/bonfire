<script lang="ts">
	import InputNumber from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { getSectionTitle, sections, getSectionStatus } from '../../stores/sections';
	
	export let isMeterkastSlim = false;
	export let elConsumptieEnkel: consumption = null; /* 911 kWh/jaar */
	export let elConsumptieNormaal: consumption = null; /* 507  kWh/jaar */
	export let elConsumptieDal: consumption = null; /* 402  kWh/jaar */

	const id = 'el-consumption';

	const checkIfConsumptieIsValid = (
		consumptie: consumption
	): {
		status: Status;
		hintStr: string | null;
	} => {
		const defaultReturn = {
			status: null,
			hintStr: null
		};
		if (!consumptie) return defaultReturn;
		if (consumptie < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		if (consumptie > 0)
			return {
				status: 'success',
				hintStr: null
			};
		return defaultReturn;
	};

	const checkIfSectionIsValid = (
		isMeterkastSlim: boolean,
		normaalStatus: Status,
		dalStatus: Status,
		enkelStatus: Status
	) => {
		if (!isMeterkastSlim) return enkelStatus;
		if (normaalStatus === 'error' || dalStatus === 'error') return 'error';
		if (normaalStatus === 'success' && dalStatus === 'success') return 'success';
		return null;
	};

	$: ({ status: normaalStatus, hintStr: normaalHintStr } =
		checkIfConsumptieIsValid(elConsumptieNormaal));
	$: ({ status: dalStatus, hintStr: dalHintStr } = checkIfConsumptieIsValid(elConsumptieDal));
	$: ({ status: enkelStatus, hintStr: enkelHintStr } = checkIfConsumptieIsValid(elConsumptieEnkel));

	$: sections.setStatus(
		id,
		checkIfSectionIsValid(isMeterkastSlim, normaalStatus, dalStatus, enkelStatus)
	);
	const sectionTitle = getSectionTitle(id, $sections);
	$: sectionStatus = getSectionStatus(id, $sections);
</script>

<Section title={sectionTitle} status={sectionStatus} {id}>
	<p>How much electricity you consume within a year.</p>
	<p>You should have your own numbers. If you don't have any, visit <a href="https://www.milieucentraal.nl/energie-besparen/inzicht-in-je-energierekening/gemiddeld-energieverbruik/#:~:text=Een%20Nederlands%20huishouden%20verbruikt%20jaarlijks,zijn%20in%202022%20grote%20verschillen.">www.milieucentraal.nl</a> to find average numbers for a household similar to yours.</p>
	{#if isMeterkastSlim}
		<div class="container">
			<div class="col-2">
				<InputNumber
					label="Consumption Normaal"
					suffix="kWh"
					bind:value={elConsumptieNormaal}
					status={normaalStatus}
					hintStr={normaalHintStr}
				/>
			</div>
			<div class="col-2">
				<InputNumber
					label="Consumption Dal"
					suffix="kWh"
					bind:value={elConsumptieDal}
					status={dalStatus}
					hintStr={dalHintStr}
				/>
			</div>
		</div>
	{:else}
		<InputNumber
			label="Consumption Enkel"
			suffix="kWh"
			bind:value={elConsumptieEnkel}
			status={enkelStatus}
			hintStr={enkelHintStr}
		/>
	{/if}
</Section>
