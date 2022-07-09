<script>
	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import Consumption from './Consumption.svelte';
	import Netbeheerkosten from './Netbeheerkosten.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import VastLeverKosten from './VastLeverKosten.svelte';
	let hasGas = true;
	const toggleHasGas = () => (hasGas = !hasGas);
</script>

<Card title="🔥 Gas" totalExpensesPerYear={1205}>
	<Toggle text="Household uses gas" isChecked={hasGas} on:click={toggleHasGas} />
	<Consumption />
	<TotVarKosten />
	<VastLeverKosten />
	<Netbeheerkosten />
</Card>
