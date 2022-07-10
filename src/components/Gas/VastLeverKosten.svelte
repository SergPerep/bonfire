<script>
    import NumberInput from "../BaseUI/InputNumber.svelte";
    export let gasVasteLevKosten = 0; /* 6.489956 €/maand */
</script>
<section>
    <h2>Vaste leveringskosten</h2>
    <NumberInput label="Gas vaste kosten" suffix="€/maand" bind:value={gasVasteLevKosten} />
</section>