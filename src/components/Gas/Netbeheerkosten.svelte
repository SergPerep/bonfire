<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let gasNetbeheerKosten = 0; /* 6.489956 €/maand */
</script>

<Section title="Netbeheerkosten">
	<NumberInput label="Gas netbeheerkosten" suffix="€/dag" bind:value={gasNetbeheerKosten} />
</Section>
