<script>
    export let onClick = () => {};
</script>

<span class="link" on:click={onClick}><slot></slot></span>
