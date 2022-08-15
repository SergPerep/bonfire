<script lang="ts">
	import '../scss/styles.scss';
	import ElectricityCard from '../components/Electricity/ElectricityCard.svelte';
	import GasCard from '../components/Gas/GasCard.svelte';
	import Total from '../components/Total/Total.svelte';
	import Nav from '../components/Nav.svelte';
	import HeroShot from '../components/HeroShot.svelte';
	import DeveloperBar from '../components/DeveloperBar/DeveloperBar.svelte';
	import { sections } from '../stores/sections';
	import CircularProgressBar from '../components/BaseUI/CircularProgressBar.svelte';
	$: isAnyHelpScreenOpen = $sections.reduce(
		(total, curVal) => total || curVal.isHelpScreenOpen,
		false
	);
	let hasGas = true;
</script>

<Nav />
<DeveloperBar />
<main>
	<HeroShot />
	<div class="main-container">
		<div class="content-wrapper">
			<ElectricityCard />
			<GasCard bind:hasGas/>
		</div>
		<div class="total-wrapper"><Total {hasGas}/></div>
	</div>
</main>

<style lang="scss">
	.content-wrapper {
		width: calc(100% - 350px - 24px);
		@include media("<desktop") {
			& {
				width: 100%;
			}
		}
		@include media("<tablet"){
			& {
				width: 100%;
			}
		}
	}
	.total-wrapper {
		width: 350px;
		@include media ("<desktop") {
			& {
				width: 100%;
				margin-bottom: 56px;
			}
		}
	}
</style>
