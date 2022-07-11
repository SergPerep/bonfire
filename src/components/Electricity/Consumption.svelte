<script lang="ts">
	import InputNumber from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sectionStatuses } from '../../stores/Store';
	export let isMeterkastSlim = false;
	export let elConsumptieEnkel: consumption = null; /* 911 kWh/jaar */
	export let elConsumptieNormaal: consumption = null; /* 507  kWh/jaar */
	export let elConsumptieDal: consumption = null; /* 402  kWh/jaar */

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

	$: {
		$sectionStatuses.elConsumption = checkIfSectionIsValid(isMeterkastSlim, normaalStatus, dalStatus, enkelStatus);
		console.log("sectionStatuses " + $sectionStatuses);
	}
</script>

<Section title="Consumption" sectionStatus={$sectionStatuses.elConsumption} id="el-consumption">
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
