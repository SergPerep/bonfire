<div class="hero-shot">
	<div class="main-container">
		<div class="desc-col">
			<h1>Bonfire</h1>
			<p class="text">Energy Cost Calculator For Housing In The Netherlands</p>
			<p class="tagline">
				Grab your contract and calculate how much money you are going to spend on gas and
				electricity this year.
			</p>
		</div>
		<div class="image-col">
			<img src="./src/img/hero-image.png" alt="campfire"/>
		</div>
	</div>
</div>

<style lang="scss">
	.main-container{
		align-items: center;
		justify-content: space-between;
	}
	.hero-shot {
		padding: 100px 0 30px;
	}
	.desc-col {
		width: 60%;
	}
	.image-col{
		width: 30%;
		img{
			width: 80%;
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
	}
	.tagline {
		font-size: 24px;
		line-height: 36px;
		color: colors.$black-a60;
	}
</style>
