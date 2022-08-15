<script lang="ts">
	export let title: string;
	export let iconName: string;
	export let size: 'sm' | 'md';
	export let url = '';
</script>

<a class="social-button" href={url} target="_blank">
	<!-- <Icon size={'sm'} name={iconName} /> -->
	<div class={`icon-${iconName}-${size}`} />
	<span>{title}</span>
</a>

<style lang="scss">
	.social-button {
		@include fonts.small;
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 0 8px;
		cursor: pointer;
		color: colors.$black-a60;
		transition: color ease-in-out 0.15s;
		border-radius: 2px;
		&:hover {
			color: black;
		}
		@include media('<tablet') {
			span {
				display: none;
			}
		}
	}
</style>
