<script lang="ts">
	import InputNumber from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let isMeterkastSlim = false;
	export let elConsumptieEnkel: number | null = null; /* 911 kWh/jaar */
	export let elConsumptieNormaal: number | null = null; /* 507  kWh/jaar */
	export let elConsumptieDal: number | null = null; /* 402  kWh/jaar */

	type Report = {
		status: Status;
		hintStr: string | null;
	};

	const checkIfConsumptieIsValid = (consumptie: number | null): Report => {
		if (consumptie && consumptie < 0)
			return {
				status: 'error',
				hintStr: "Can't be negative"
			};
		if (consumptie && consumptie > 0)
			return {
				status: 'success',
				hintStr: null
			};
		return {
			status: null,
			hintStr: null
		};
	};

	const checkIfSectionIsValid = (
		isMeterkastSlim: boolean,
		normaalReport: Report,
		dalReport: Report,
		enkelReport: Report
	) => {
		if (!isMeterkastSlim) return enkelReport.status;
		if (normaalReport.status === 'error' || dalReport.status === 'error') return 'error';
		if (normaalReport.status === 'success' && dalReport.status === 'success') return 'success';
		return null;
	};

	$: normaalReport = checkIfConsumptieIsValid(elConsumptieNormaal);
	$: dalReport = checkIfConsumptieIsValid(elConsumptieDal);
	$: enkelReport = checkIfConsumptieIsValid(elConsumptieEnkel);
	$: sectionStatus = checkIfSectionIsValid(isMeterkastSlim, normaalReport, dalReport, enkelReport);
</script>

<Section title="Consumption" bind:sectionStatus>
	{#if isMeterkastSlim}
		<div class="container">
			<div class="col-2">
				<InputNumber
					label="Consumption Normaal"
					suffix="kWh"
					bind:value={elConsumptieNormaal}
					status={normaalReport.status}
					hintStr={normaalReport.hintStr}
				/>
			</div>
			<div class="col-2">
				<InputNumber
					label="Consumption Dal"
					suffix="kWh"
					bind:value={elConsumptieDal}
					status={dalReport.status}
					hintStr={dalReport.hintStr}
				/>
			</div>
		</div>
	{:else}
		<InputNumber
			label="Consumption Enkel"
			suffix="kWh"
			bind:value={elConsumptieEnkel}
			status={enkelReport.status}
			hintStr={enkelReport.hintStr}
		/>
	{/if}
</Section>
