<script>
    import NumberInput from "../BaseUI/InputNumber.svelte";
    let gasConsumptie = 0; /* 1200 m³/jaar */
</script>
<section>
    <h2>Consumption</h2>
    <NumberInput label="Consumption per jaar" suffix="m³" bind:value={gasConsumptie} />
</section>