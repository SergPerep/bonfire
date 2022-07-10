<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
import Section from '../BaseUI/Section.svelte';
	export let isMeterkastSlim = false;
	export let elEnkelTotVarKosten = 0; /* 0.470799  €/kWh */
	export let elNormaalTotVarKosten = 0; /* 0.490280 €/kWh */
	export let elDalTotVarKosten = 0; /* 0.445389 €/kWh */
</script>

<Section title="Totale variabele kosten">
	{#if isMeterkastSlim}
		<div class="container">
			<div class="col-2">
				<NumberInput
					label="Elektriciteit Normaal"
					suffix="€/kWh"
					bind:value={elNormaalTotVarKosten}
				/>
			</div>
			<div class="col-2">
				<NumberInput label="Elektriciteit Dal" suffix="€/kWh" bind:value={elDalTotVarKosten} />
			</div>
		</div>
	{:else}
		<NumberInput label="Elektriciteit Enkel" suffix="€/kWh" bind:value={elEnkelTotVarKosten} />
	{/if}
</Section>