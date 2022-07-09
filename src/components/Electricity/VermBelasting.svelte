<script>
    import Select from "../BaseUI/Select.svelte";
</script>

<section>
    <h2>Vermindering energiebelasting</h2>
    <Select
        label="Vermindering energiebelasting"
        suffix="€/dag"
        optionList={[
            {
                year: 2022,
                value: -2.25965
            },
            {
                year: 2021,
                value: -1.530302
            }
        ]}
    />
</section>