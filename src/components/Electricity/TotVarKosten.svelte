<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	import { sections, getSectionTitle, getSectionStatus } from '../../stores/Store';
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
