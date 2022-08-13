<script lang="ts">
	/* This component is redacted. But is still here just in case.
	/* ===== SET UP Params ===== */
	export let progress: number; // represents percent of a progress: from 0 to 1
	const circleWidth = 20;
	const barWidth = 2.5;

	/* ===== CALCULATIONS ===== */
	const circleRadius = circleWidth / 2 - barWidth / 2;
	const circleLength = 2 * Math.PI * circleRadius;
	$: barLineLength = circleLength * progress;
	$: barGapLength = circleLength - barLineLength;

	/* ===== APPLY STYLES ===== */

	$: shellStyle = `r: ${circleRadius}; stroke-width: ${barWidth};`;
	$: barStyle = `${shellStyle} stroke-dasharray: ${barLineLength}, ${barGapLength}`;
</script>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<circle class="shell" cy="12" cx="12" style={shellStyle} />
	<circle class="bar" cy="12" cx="12" style={barStyle} />
</svg>

<style lang="scss">
	svg {
		width: 24px;
		height: 24px;
		display: block;
	}
	.shell,
	.bar {
		fill: none;
		transform-origin: 50% 50%;
	}
	.shell {
		stroke: colors.$black-a12;
	}
	.bar {
		stroke: colors.$success;
		transform: rotate(-90deg);
		transition: stroke-dasharray ease-in-out 1s;
	}
</style>
