<script>
	import Card from './Card.svelte';
	import Toggle from './Toggle.svelte';
	import NumberInput from './NumberInput.svelte';
	import Select from './Select.svelte';

	/* ===== Elektriciteit ===== */
	let isMeterkastSlim = true;
	const toggleIsMeterkastSlim = () => (isMeterkastSlim = !isMeterkastSlim);
	let elConsumptieEnkel = 0; /* 911 kWh/jaar */
	let elConsumptieNormaal = 0; /* 507  kWh/jaar */
	let elConsumptieDal = 0; /* 402  kWh/jaar */
	let elEnkelTotVarKosten = 0; /* 0.470799  €/kWh */
	let elNormaalTotVarKosten = 0; /* 0.490280 €/kWh */
	let elDalTotVarKosten = 0; /* 0.445389 €/kWh */
	let elVasteLevKosten = 0; /* 6.489956 €/maand */
	let elYear = -28.60;
	// let elMonth = elYear / 12;
</script>

<Card title="⚡️ Elektriciteit" totalExpensesPerYear={elYear}>
	<Toggle text="Slim meterkast" isChecked={isMeterkastSlim} on:click={toggleIsMeterkastSlim} />
	<section>
		<h2>Consumption</h2>
		{#if isMeterkastSlim}
			<div class="slim-meterkast-container">
				<NumberInput label="Consumption Normaal" suffix="kWh" bind:value={elConsumptieNormaal} />
				<NumberInput label="Consumption Dal" suffix="kWh" bind:value={elConsumptieDal} />
			</div>
		{:else}
			<NumberInput label="Consumption Enkel" suffix="kWh" bind:value={elConsumptieEnkel} />
		{/if}
	</section>
	<section>
		<h2>Totale variabele kosten</h2>

		{#if isMeterkastSlim}
			<div class="slim-meterkast-container">
				<NumberInput
					label="Elektriciteit Normaal"
					suffix="€/kWh"
					bind:value={elNormaalTotVarKosten}
				/>
				<NumberInput label="Elektriciteit Dal" suffix="€/kWh" bind:value={elDalTotVarKosten} />
			</div>
		{:else}
			<NumberInput label="Elektriciteit Enkel" suffix="€/kWh" bind:value={elEnkelTotVarKosten} />
		{/if}
	</section>
	<section>
		<h2>Vaste leveringskosten</h2>
		<NumberInput
			label="Elektriciteit vaste kosten"
			suffix="€/maand"
		/>
	</section>
	<section>
		<h2>Vermindering energiebelasting</h2>
		<Select
			label="Vermindering energiebelasting"
			suffix="€/dag"
			optionList={[
				{
					year: 2022,
					value: -2.25965
				},
				{
					year: 2021,
					value: -1.530302
				}
			]}
		/>
	</section>
	<section>
		<h2>Netbeheerkosten</h2>
		<NumberInput
			label="Elektriciteit netbeheerkosten"
			suffix="€/dag"
			bind:value={elVasteLevKosten}
		/>
	</section>
</Card>

<style lang="scss">
	h2 {
		font-size: 18px;
		line-height: 24px;
		margin-bottom: 16px;
	}

	section {
		padding: 24px 0 0;
		margin-bottom: 24px;
		border-top: 1px solid colors.$black-a12;
	}
	.slim-meterkast-container {
		display: flex;
		:global(.text-field) {
			width: calc((100% - 24px) / 2);
			&:first-child {
				margin-right: 24px;
			}
		}
	}
</style>
