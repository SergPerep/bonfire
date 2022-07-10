<script>
	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import Consumption from './Consumption.svelte';
	import Netbeheerkosten from './Netbeheerkosten.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import VastLeverKosten from './VastLeverKosten.svelte';

	let hasGas = true;
	let gasConsumptie = 0;
	let gasTotVarKosten = 0;
	let gasVasteLevKosten = 0;
	let gasNetbeheerKosten = 0;

	const toggleHasGas = () => (hasGas = !hasGas);
</script>

<Card title="🔥 Gas" kostenPerJaar={1205}>
	<Toggle text="Household uses gas" isChecked={hasGas} on:click={toggleHasGas} />
	<Consumption {gasConsumptie} />
	<TotVarKosten {gasTotVarKosten} />
	<VastLeverKosten {gasVasteLevKosten} />
	<Netbeheerkosten {gasNetbeheerKosten} />
</Card>
