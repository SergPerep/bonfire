<div class="hero-shot">
	<div class="main-container">
		<div class="desc-wrapper">
			<h1>Bonfire</h1>
			<p class="text">Energy Cost Calculator For Housing In The Netherlands</p>
			<p class="tagline">
				Grab your contract and calculate how much money you are going to spend on gas and
				electricity this year.
			</p>
		</div>
		<div class="image-wrapper">
			<img src="/img/hero-image.png" alt="campfire" />
		</div>
	</div>
</div>

<style lang="scss">
	.main-container {
		align-items: center;
		justify-content: space-between;
		display: flex;
		@include media('<tablet') {
			padding: 0 16px;
		}
	}
	.hero-shot {
		padding: 100px 0 70px;
		@include media('<tablet') {
			padding: 72px 0 60px;
		}
	}
	.desc-wrapper {
		width: 60%;
		@include media('<tablet') {
			width: 100%;
		}
	}
	.image-wrapper {
		width: 30%;
		img {
			width: 80%;
		}
		@include media('<tablet') {
			display: none;
		}
	}
	h1 {
		margin-bottom: 0;
		color: colors.$prime;
	}
	.text {
		margin-top: 0;
	}
	h1,
	.text {
		@include fonts.h1;
		line-height: 60px;
		@include media('<desktop') {
			@include fonts.h2;
		}
		@include media('<tablet') {
			font-size: 32px;
			line-height: 44px;
		}
	}
	.tagline {
		font-size: 24px;
		line-height: 36px;
		color: colors.$black-a60;
	}
</style>
