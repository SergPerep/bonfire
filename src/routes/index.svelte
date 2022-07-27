<script lang="ts">
	import '../scss/styles.scss';
	import ElectricityCard from '../components/Electricity/ElectricityCard.svelte';
	import GasCard from '../components/Gas/GasCard.svelte';
	import Total from '../components/Total/Total.svelte';
</script>

<main>
	<div class="main-container">
		<div class="col-1">
			<ElectricityCard />
			<GasCard />
		</div>
		<div class="col-2"><Total /></div>
	</div>
</main>

<style lang="scss">
	.main-container {
		width: 1100px;
		margin: 40px auto;
		display: flex;
		justify-content: space-between;
	}
	.col-1 {
		width: calc(65% - 12px);
	}
	.col-2 {
		width: calc(35% - 12px);
	}
</style>
