<script>
	import Card from '../components/Card.svelte';
	import NumberInput from '../components/NumberInput.svelte';
	import ElectricityCard from '../components/ElectricityCard.svelte';

	/* ===== Gas ===== */
	let gasConsumptie = 0; /* 1200 m³/jaar */
	let gasTotVarKosten = 0; /* 1.927312 €/m³ */
	let gasVasteLevKosten = 0; /* 6.489956 €/maand */
</script>

<main>
	<div class="container">
		<ElectricityCard />
		<!-- <Card>
			<section>
				<h2>Consumption</h2>
				<NumberInput label="Consumption per jaar" bind:value={gasConsumptie} />
			</section>
			<section>
				<h2>Variabele kosten</h2>
				<NumberInput label="Gas Tarief" bind:value={gasTotVarKosten} />
			</section>
			<section>
				<h2>Vaste kosten</h2>
				<NumberInput label="Gas vaste kosten" bind:value={gasVasteLevKosten} />
			</section>
		</Card> -->
	</div>
</main>

<style lang="scss">
	.container {
		width: 690px;
		margin: 40px auto;
	}
</style>
