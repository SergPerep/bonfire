<script lang="ts">
	import '../scss/styles.scss';
	import ElectricityCard from '../components/Electricity/ElectricityCard.svelte';
	import GasCard from '../components/Gas/GasCard.svelte';
</script>

<main>
	<div class="main-container">
		<ElectricityCard />
		<GasCard />
		
	</div>
</main>

<style lang="scss">
	.main-container {
		width: 690px;
		margin: 40px auto;
	}
</style>
