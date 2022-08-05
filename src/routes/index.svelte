<script lang="ts">
	import '../scss/styles.scss';
	import ElectricityCard from '../components/Electricity/ElectricityCard.svelte';
	import GasCard from '../components/Gas/GasCard.svelte';
	import Total from '../components/Total/Total.svelte';
	import Nav from '../components/Nav.svelte';
import HeroShot from '../components/HeroShot.svelte';
import DeveloperBar from '../components/DeveloperBar/DeveloperBar.svelte';
</script>

<Nav />
<DeveloperBar />
<main>
	<HeroShot />
	<div class="main-container">
		<div class="col-1">
			<ElectricityCard />
			<GasCard />
		</div>
		<div class="col-2"><Total /></div>
	</div>
</main>

<style lang="scss">
	.col-1 {
		width: calc(65% - 12px);
	}
	.col-2 {
		width: calc(35% - 12px);
	}
</style>
