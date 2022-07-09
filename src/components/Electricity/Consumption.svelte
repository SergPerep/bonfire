<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	export let isMeterkastSlim = false;
	let elConsumptieEnkel = 0; /* 911 kWh/jaar */
	let elConsumptieNormaal = 0; /* 507  kWh/jaar */
	let elConsumptieDal = 0; /* 402  kWh/jaar */
</script>

<section>
	<h2>Consumption</h2>
	{#if isMeterkastSlim}
		<div class="container">
			<div class="col-2">
				<NumberInput label="Consumption Normaal" suffix="kWh" bind:value={elConsumptieNormaal} />
			</div>
			<div class="col-2">
				<NumberInput label="Consumption Dal" suffix="kWh" bind:value={elConsumptieDal} />
			</div>
		</div>
	{:else}
		<NumberInput label="Consumption Enkel" suffix="kWh" bind:value={elConsumptieEnkel} />
	{/if}
</section>
