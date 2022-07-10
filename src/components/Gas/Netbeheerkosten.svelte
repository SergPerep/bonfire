<script>
    import NumberInput from "../BaseUI/InputNumber.svelte";
    export let gasNetbeheerKosten = 0; /* 6.489956 €/maand */
</script>

<section>
    <h2>Netbeheerkosten</h2>
    <NumberInput
        label="Gas netbeheerkosten"
        suffix="€/dag"
        bind:value={gasNetbeheerKosten}
    />
</section>