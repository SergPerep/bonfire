<script>
    import NumberInput from "../BaseUI/InputNumber.svelte";
    let gasTotVarKosten = 0; /* 0.490280 €/m³ */
</script>
<section>
    <h2>Totale variabele kosten</h2>
    <NumberInput label="Gas vaste kosten" bind:value={gasTotVarKosten} suffix="kWh/m³" />
</section>