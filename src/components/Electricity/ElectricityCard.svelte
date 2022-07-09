<script>
	import Card from '../BaseUI/Card.svelte';
	import Toggle from '../BaseUI/Toggle.svelte';
	import TotVarKosten from './TotVarKosten.svelte';
	import Consumption from './Consumption.svelte';
	import VasteLeverKosten from './VasteLeverKosten.svelte';
	import VermBelasting from './VermBelasting.svelte';
import Netbeheerkosten from './Netbeheerkosten.svelte';

	/* ===== Elektriciteit ===== */
	let isMeterkastSlim = true;
	const toggleIsMeterkastSlim = () => (isMeterkastSlim = !isMeterkastSlim);

	let elYear = -28.6;
	// let elMonth = elYear / 12;
</script>

<Card title="⚡️ Elektriciteit" totalExpensesPerYear={elYear}>
	<Toggle text="Slim meterkast" isChecked={isMeterkastSlim} on:click={toggleIsMeterkastSlim} />
	<Consumption {isMeterkastSlim} />
	<TotVarKosten {isMeterkastSlim} />
	<VasteLeverKosten />
	<VermBelasting />
	<Netbeheerkosten />
</Card>

