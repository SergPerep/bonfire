<script lang="ts">
	import '../scss/styles.scss';
	import ElectricityCard from '../components/Electricity/ElectricityCard.svelte';
	import GasCard from '../components/Gas/GasCard.svelte';
	import Total from '../components/Total/Total.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<Nav />
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
	main {
		margin: 40px 0;
	}
	.col-1 {
		width: calc(65% - 12px);
	}
	.col-2 {
		width: calc(35% - 12px);
	}
</style>
