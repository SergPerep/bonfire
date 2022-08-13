<script lang="ts">
	/* ===== SET UP Params ===== */

	export let progress = .7; // represents percent of a progress: from 0 to 1
	const circleWidth = 20;
	const barWidth = 3;
	const numberOfSplashes = 9;

	/*===== CALCULATE PARAMS =====*/

	const circleRadius = circleWidth / 2 - barWidth / 2;
	const circleLength = 2 * Math.PI * circleRadius;
	const angleStep = 360 / numberOfSplashes;
	$: barLineLength = circleLength * progress;
	$: barGapLength = circleLength - barLineLength;

    /*===== GENERATE ARRAY OF SPLASHES =====*/

    /*----- Func that helps to make values a little bit noisy -----*/
	const disperse = (max: number, disp = 0.2) => {
		const gap = disp * max;
		const min = max - gap;
		return Math.random() * gap + min;
	};

	type SplashList = {
		angleShift: number;
		animDelay: number;
	}[];

	const splashList: SplashList = new Array(numberOfSplashes - 1)
		.fill(null)
		.map((splash, index) => ({
			angleShift: disperse(angleStep, 0.1) * index,
			animDelay: disperse(0.3, 0.3)
		}));
</script>

<div class="circular-progress-bar" class:filled={progress >= 1}>
	<!--++ Here JS is going to render splashes ++-->
	{#each splashList as splash}
		<div class="splash" style={`transform: rotate(${splash.angleShift}deg)`}>
			<div class="splash__line" style={`animation-delay: ${splash.animDelay}s`} />
		</div>
	{/each}
    <!--++ end +++-->

	<!-- SVG -->
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<circle class="progress__track" cy="12" cx="12" r={circleRadius} stroke-width={barWidth} />
		<circle
			class="progress__bar"
			cy="12"
			cx="12"
			r={circleRadius}
			stroke-width={barWidth}
			stroke-dasharray={`${barLineLength}, ${barGapLength}`}
		/>
		<g class="check">
			<circle class="check__circle" cy="12" cx="12" />
			<path class="check__mark" d="M0 0 L5 5 L12 -3 " />
		</g>
	</svg>
</div>

<style lang="scss">
	@use 'sass:math';
	/* ===== COLORS ===== */

	$prime: colors.$success;

	/* ===== SET UP PARAMS ===== */

	$shellColor: rgba(0, 0, 0, 0.12);
	$barColor: $prime;
	$scale: 1; // scale SVG. 1 is 24x24px.
	$bodySize: 24px * $scale;
	$splash-thickness: 3px * $scale;

	/* ===== CIRCULAR PROGRESS BAR ==== */

	.circular-progress-bar {
		position: relative;
		width: $bodySize;
		height: $bodySize;
	}

	/* ===== SVG ==== */

	.circular-progress-bar svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.progress__track,
	.progress__bar {
		fill: none;
		transform-origin: 50% 50%;
	}
	.progress__track {
		stroke: $shellColor;
	}
	.progress__bar {
		stroke: $barColor;
		transform: rotate(-90deg);
		transition: stroke-dasharray ease-in-out 0.2s;
	}

	/* ===== SPLASHES ===== */

	$splash-width: $splash-thickness;
	$splash-height: 6px * $scale;

	:global(.splash) {
		display: none;
		.filled & {
			display: block;
			position: absolute;
			bottom: calc(50%);
			left: calc(50% - #{$splash-width} / 2);
			width: $splash-width;
			height: $splash-height;
			transform-origin: bottom center;
		}
	}

	:global(.splash__line) {
		width: $splash-width;
		height: $splash-height;
		border-radius: calc($splash-width / 2);
		transform-origin: bottom center;
		animation-name: splash;
		animation-duration: 0.8s;
		animation-timing-function: ease-in-out;
	}

	@keyframes splash {
		0% {
			height: $splash-width;
			transform: translate(0, math.div(-$bodySize, 1.8));
			background: transparent;
		}
		50% {
			height: $splash-height;
			background: $barColor;
		}
		70% {
			height: $splash-width;
		}
		100% {
			transform: translate(0, -$splash-height - calc($bodySize / 2.1));
			height: $splash-width;
			background: transparent;
		}
	}

	/* ===== A CHECK WHEN PROGRESS FILLED ===== */

	.check {
		display: none;
	}
	.filled .check {
		display: block;
	}
	.filled .check__mark {
		transform-box: fill-box;
		transform-origin: center center;
		transform: translate(6px, 11px) scale(0.8);
		stroke-width: 2px;
		stroke: white;
		fill: none;
		stroke-dasharray: 22px 40px;
		animation-name: drawCheck;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
	}

	@keyframes drawCheck {
		0% {
			stroke-dashoffset: 22px;
			transform: translate(6px, 11px) scale(0.2);
		}
		80% {
			transform: translate(6px, 11px) scale(1.15);
		}
		100% {
			stroke-dashoffset: 1px;
			transfrom: translate(6px, 11px) scale(1);
		}
	}

	.filled .check__circle {
		fill: $barColor;
		r: 10px;
		transform-origin: center center;
		animation-name: check-circle-appears;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
	}

	@keyframes check-circle-appears {
		0% {
			fill: rgba($barColor, 0);
			r: 2px;
		}
		80% {
			r: 12px;
			fill: $barColor;
		}
	}
</style>
