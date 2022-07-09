<script>
	export let isChecked = false;
</script>

<div class={`switch ${isChecked ? "checked" : ""}`} on:click>
	<div class="switch__handle" />
</div>

<style lang="scss">
	.switch {
		width: 52px;
		height: 32px;
		border: 2px solid colors.$black-a60;
        background-color: colors.$black-a04;
        transition: border-color ease-out .2s, background-color ease-out .2s;
		border-radius: 40px;
		&__handle {
            width: 28px;
            height: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform ease-out .2s;
			&::after {
				content: '';
				display: block;
				border-radius: 50%;
				width: 16px;
				height: 16px;
				background-color: colors.$black-a60;
                transition: background-color ease-out .2s;
			}
		}
	}
    .switch.checked{
        border-color: rgba(0, 0, 0, 0);
        background-color: colors.$success;
       .switch__handle{
            transform: translateX(20px);
            &::after{
                background-color: white;
                width: 24px;
                height: 24px;
            }
        }
    }
</style>
