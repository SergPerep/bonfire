<script>
    import Switch from "./Switch.svelte";
    export let text = "Toggle";
    export let isChecked = false;
</script>

<div class="toggle" on:click>
    <p>{text}</p>
    <Switch {isChecked}/>
</div>

<style lang="scss">
    .toggle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0;
        cursor: pointer;
        p{
            @include fonts.body;
        }
    }
</style>