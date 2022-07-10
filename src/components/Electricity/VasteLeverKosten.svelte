<script lang="ts">
	import NumberInput from '../BaseUI/InputNumber.svelte';
	import Section from '../BaseUI/Section.svelte';
	export let elVasteLevKosten: number;
</script>

<Section title="Vaste leveringskosten">
	<NumberInput label="Elektriciteit vaste kosten" suffix="€/maand" bind:value={elVasteLevKosten} />
</Section>
