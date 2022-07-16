<script>
	import CoolblueTarieven from '../RatesExamples/CoolblueTarieven.svelte';
</script>

<div class="overlay">
	<div class="popup">
		<h2>Where to find rates</h2>
		<CoolblueTarieven />
	</div>
</div>

<style lang="scss">
	.overlay{
		background-color: colors.$black-a60;
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		padding: 24px 16px;
	
		overflow-y: scroll;
	}
	.popup{
		background-color: white;
		border-radius: 16px;
		padding: 36px;
		width: 900px;
		margin: 0 auto;
	}
</style>