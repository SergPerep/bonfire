<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasVasteLevKosten = 0; /* 6.489956 €/maand */
</script>

<Section title="Vaste leveringskosten">
	<NumberInput label="Gas vaste kosten" suffix="€/maand" bind:value={gasVasteLevKosten} />
</Section>
