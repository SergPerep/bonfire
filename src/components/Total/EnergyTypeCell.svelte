<script lang="ts">
	import ProgressCircleIndicator from '../BaseUI/ProgressCircleIndicator.svelte';
	export let fillingProgress: number;
    export let title = "Energy type cell";
</script>

<div class="energy-type">
	<ProgressCircleIndicator progress={fillingProgress} /><span>{title}</span>
</div>

<style lang="scss">
	.energy-type {
		display: flex;
        font-weight: bold;
		span {
			padding: 1px 0 0 4px;
		}
	}
</style>
