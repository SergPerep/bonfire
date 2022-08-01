<script lang="ts">
	import { gasKostenPerJaar, elKostenPerJaar } from '../../stores/kostenPerJaar';
	import { sections, getSectionsFillingProgress } from '../../stores/sections';
	import EnergyTypeCell from "./EnergyTypeCell.svelte";
	$: gasKostenPerMonth = $gasKostenPerJaar ? $gasKostenPerJaar / 12 : null;
	$: elKostenPerMonth = $elKostenPerJaar ? $elKostenPerJaar / 12 : null;
	$: totalKostenPerJaar =
		$gasKostenPerJaar && $elKostenPerJaar ? $gasKostenPerJaar + $elKostenPerJaar : null;
	$: totalKostenPerMonth = totalKostenPerJaar ? totalKostenPerJaar / 12 : null;

	const formatPriceToString = (amount: number | null, digitsAfterPoint: number = 2) => {
		if (!amount) return '–';
		const isNegative = amount < 0;
		if (isNegative) return '- €' + Math.abs(amount).toFixed(digitsAfterPoint);
		return '€' + amount.toFixed(digitsAfterPoint);
	};

	$: elFillingProgress = getSectionsFillingProgress($sections, 'el');
	$: gasFillingProgress = getSectionsFillingProgress($sections, 'gas');
</script>

<div class="total">
	<header>
		<h2>Total energy expenses</h2>
	</header>
	<div class="body">
		<table>
			<thead>
				<tr>
					<th>Energy type</th>
					<th>per year</th>
					<th>per month</th>
				</tr>
			</thead>
			<tbody>
				<tr class:empty={!$elKostenPerJaar} class:is-positive={$elKostenPerJaar ? $elKostenPerJaar >= 0 : false}>
					<td><EnergyTypeCell fillingProgress={elFillingProgress} title="Elektriciteit"/></td>
					<td>{formatPriceToString($elKostenPerJaar)}</td>
					<td>{formatPriceToString(elKostenPerMonth)}</td>
				</tr>
				<tr class:empty={!$gasKostenPerJaar} class:is-positive={$gasKostenPerJaar ? $gasKostenPerJaar >= 0 : false}>
					<td><EnergyTypeCell fillingProgress={gasFillingProgress} title="Gas"/></td>
					<td>{formatPriceToString($gasKostenPerJaar)}</td>
					<td>{formatPriceToString(gasKostenPerMonth)}</td>
				</tr>
				<tr class="footer" class:empty={!totalKostenPerJaar}>
					<td>Total</td>
					<td>{formatPriceToString(totalKostenPerJaar)}</td>
					<td>{formatPriceToString(totalKostenPerMonth)}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style lang="scss">
	.total {
		background-color: white;
		border-radius: 12px;
		position: sticky;
		top: 70px;
		padding-bottom: 4px;
	}
	header {
		padding: 24px 24px 4px;
		h2 {
			@include fonts.h3;
			margin-bottom: 0;
		}
	}
	table {
		border-collapse: collapse;
		width: 100%;
	}
	th,
	td {
		@include fonts.small;
		padding: 10px 16px;
		&:first-child{
			padding-left: 24px;
		}
		&:last-child{
			padding-right: 24px;
		}
	}
	thead th {
		border-bottom: 1px solid colors.$black-a12;
		color: colors.$black-a30;
		&:first-child{
			text-align: left;
		}
		&:not(:first-child) {
			text-align: right;
		}
	}
	tbody td:not(:first-child) {
		text-align: right;
	}
	tr.footer {
		border-top: 1px solid colors.$black-a12;
		font-weight: bold;
	}

	// Color of data cells
	tr:not(.footer) td:not(:first-child) {
		color: colors.$success;
	}
	tr:not(.footer).empty td:not(:first-child){
		color: colors.$black-a30;
	}
	tr:not(.footer).is-positive td:not(:first-child) {
		color: colors.$error;
	}

	tr.footer.empty td:not(:first-child){
		color: colors.$black-a30;
	}
</style>
