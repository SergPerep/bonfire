<script>
    import NumberInput from "../BaseUI/InputNumber.svelte";
    let elVasteLevKosten = 0; /* 6.489956 €/maand */
</script>

<section>
    <h2>Netbeheerkosten</h2>
    <NumberInput
        label="Elektriciteit netbeheerkosten"
        suffix="€/dag"
        bind:value={elVasteLevKosten}
    />
</section>