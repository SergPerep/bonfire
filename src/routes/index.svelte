<script>
	import Header from '../components/Header.svelte';
	import Card from '../components/Card.svelte';
	import NumberInput from '../components/NumberInput.svelte';
	import Toggle from '../components/Toggle.svelte';
	let isMeterkastSlim = false;
	let elEnkelTotVarKosten = '';
	const toggleIsMeterkastSlim = () => {
		isMeterkastSlim = !isMeterkastSlim;
	};
</script>

<main>
	<div class="container">
		<h1>Welcome to SvelteKit</h1>
		<Card>
			<Header title="📎️ Contract" />
			<section>
				<NumberInput label="Year contract starts" />
			</section>
		</Card>

		<Card>
			<Header title="⚡️ Elektriciteit" />
			<section>
				<h2>Consumption</h2>
				<NumberInput label="Consumption per year" />
			</section>
			<section>
				<h2>Variabele kosten</h2>
				<Toggle
					text="Slim meterkast"
					isChecked={isMeterkastSlim}
					on:click={toggleIsMeterkastSlim}
				/>
				{#if isMeterkastSlim}
					<div class="slim-meterkast-container">
						<NumberInput label="Elektriciteit Normaal" />
						<NumberInput label="Elektriciteit Dal" />
					</div>
				{:else}
					<NumberInput label="Elektriciteit Enkel" />
				{/if}
			</section>
			<section>
				<h2>Vaste kosten</h2>
				<NumberInput label="El. vaste kosten" />
			</section>
		</Card>

		<Card>
			<Header title="🔥 Gas" />
			<section>
				<h2>Consumption</h2>
				<NumberInput label="Consumption per jaar" />
			</section>
			<section>
				<h2>Variabele kosten</h2>
				<NumberInput label="Gas Tarief" />
			</section>
			<section>
				<h2>Vaste kosten</h2>
				<NumberInput label="Gas vaste kosten" />
			</section>
		</Card>

		<Card>
			<Header title="🤖️ Netbeheer" />
			<section>
				<NumberInput label="Netbeheer" />
				<NumberInput label="Meterkast" />
			</section>
		</Card>
	</div>
</main>

<style lang="scss">
	.container {
		width: 610px;
		margin: 0 auto;
	}
	h2 {
		font-size: 18px;
		line-height: 24px;
		margin-bottom: 16px;
	}
	section {
		padding: 24px 0 0;
		margin-bottom: 24px;
		border-top: 1px solid colors.$black-a12;
	}
	.slim-meterkast-container {
		display: flex;
		:global(.text-field) {
			width: calc((100% - 24px) / 2);
			&:first-child {
				margin-right: 24px;
			}
		}
	}
</style>
