<script>
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let elNetbeheerKosten = 0; /* 6.489956 €/maand */
</script>

<Section title="Netbeheerkosten">
	<NumberInput
		label="Elektriciteit netbeheerkosten"
		suffix="€/dag"
		bind:value={elNetbeheerKosten}
	/>
</Section>
