<script lang="ts">
    import SocialButton from "./SocialButton.svelte";
</script>

<div class="devbar">
	<div class="developer">
		<img class="avatar" src="/img/avatar.jpg" alt="developer Sergei Perepelkin" />
		<div class="desc">
			<span class="dev-name">Sergei Perepelkin</span>
			<span class="dev-position"> • Developer</span>
		</div>
	</div>
	<div class="btn-group">
		<SocialButton title='GitHub' iconName='GitHub' url="https://github.com/sergperep" size="md"/>
		<SocialButton
			title={'LinkedIn'}
			iconName={'LinkedIn'}
			url="https://www.linkedin.com/in/sergperep/"
            size="md"
		/>
		<SocialButton title={'Twitter'} iconName={'Twitter'} url="https://twitter.com/sergperep" size="md"/>
	</div>
</div>

<style lang="scss">
	$sideNavWidth: 300px;
	$topNavHeight: 44px;
	$developerBarHeight: 36px;

	.devbar {
		background-color: rgba(colors.$soft-sand, 0.5);
		@include backdrop-filter(blur(10px));
		width: 100%;
		height: $developerBarHeight;
		border-top: 1px solid colors.$white-a12;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		padding: 0 18px;
		position: fixed;
		left: 0;
		bottom: 0;
        z-index: 1;
		.developer {
			display: flex;
			align-items: center;
			gap: 8px;
			height: 100%;
			.dev-position {
				color: colors.$black-a60;
			}
		}
		.avatar {
			width: 24px;
			height: 24px;
			border-radius: 50%;
		}
		.desc {
			@include fonts.small;
		}
		.btn-group {
			display: flex;
			align-items: stretch;
			height: 100%;
		}
	}

	@media screen and (max-width: 700px) {
		.devbar {
			.social-button {
				span {
					display: none;
				}
			}
		}
	}
</style>
