<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	export let isMeterkastSlim = false;
	let elEnkelTotVarKosten = 0; /* 0.470799  €/kWh */
	let elNormaalTotVarKosten = 0; /* 0.490280 €/kWh */
	let elDalTotVarKosten = 0; /* 0.445389 €/kWh */
</script>

<section>
	<h2>Totale variabele kosten</h2>

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
</section>
