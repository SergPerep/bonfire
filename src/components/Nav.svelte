<script lang="ts">
	export let buttonList: {name:string, href:string, hasIcon:boolean}[] = [];
</script>

<nav>
	<div class="main-container">
		<img src="/img/logo.svg" alt="logo bonfire" />
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
		@include media("<tablet"){
			padding: 12px;
			position: static;
			border-bottom: 1px solid colors.$black-a12;
		}
	}
	.main-container{
		display: flex;
		@include media("<tablet") {
			padding: 0 16px;
		}
		@include media("<tablet"){
			justify-content: center;
		}
	}
	img {
		width: 100px;
	}
	.buttons {
		display: flex;
		@include media("<tablet"){
			display: none;
		}
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
