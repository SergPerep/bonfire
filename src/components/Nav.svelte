<script lang="ts">
	const buttonList = [
		{
			name: 'Math behind calculator',
			href: 'https://github.com/sergperep/bonfire/blob/main/docs/math.md',
			hasIcon: true
		},
		{
			name: 'GitHub',
			href: 'https://github.com/sergperep/bonfire',
			hasIcon: true
		}
	];
</script>

<nav>
	<div class="main-container">
		<img src="src/img/logo.svg" alt="logo bonfire" />
		<div class="buttons">
			{#each buttonList as button}
				{#if button.hasIcon}
					<a href={button.href} class="with-icon">
						{button.name}<span class="material-symbols-outlined"> arrow_outward </span>
					</a>
				{:else}
					<a href={button.href}>{button.name}</a>
				{/if}
			{/each}
		</div>
	</div>
</nav>

<style lang="scss">
	nav{
		background-color: rgba(colors.$soft-sand, .6);
		@include backdrop-filter(blur(10px));
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 3;
	}
	img {
		width: 100px;
	}
	.buttons {
		display: flex;

		a {
			@include fonts.body;
			color: colors.$black-a60;
			display: block;
			padding: 16px 16px;
            transition: color ease-in-out .15s;
            &:hover{
                color: black;
            }
			&.with-icon {
				display: flex;
                align-items: center;
				span {
					display: block;
					width: 24px;
					height: 24px;
				}
			}
		}
	}
</style>
