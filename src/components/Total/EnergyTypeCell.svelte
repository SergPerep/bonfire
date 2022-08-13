<script lang="ts">
	import ProgressCircleIndicator from '../BaseUI/ProgressCircleIndicator.svelte';
	import CircularProgressBar from '../BaseUI/CircularProgressBar.svelte';
	export let fillingProgress: number;
    export let title = "Energy type cell";
</script>

<div class="energy-type">
	<CircularProgressBar progress={fillingProgress} /><span>{title}</span>
</div>

<style lang="scss">
	.energy-type {
		display: flex;
        font-weight: bold;
		span {
			padding: 1px 0 0 8px;
		}
	}
</style>
