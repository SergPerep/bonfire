<script lang="ts">
	export let tableData: TableData;
</script>

<table>
	<thead>
		<tr>
			<th>{tableData.title}</th><th>eenheden</th><th>incl. BTW</th>
		</tr>
	</thead>
	<tbody>
		{#each tableData.rows as row}
			<tr class:active={row.isActive}>
				<td>{row.name}</td>
				<td>
					{#if row.eenheden}
						{row.eenheden}
					{:else}
						{tableData.eenheden}
					{/if}
				</td>
				<td>{row.inclBTW}</td>
			</tr>
		{/each}
		{#if tableData.total}
			<tr class="total" class:active={tableData.total.isActive}>
				<td>{tableData.total.name}</td>
				<td>
					{#if tableData.total.eenheden}
						{tableData.total.eenheden}
					{:else}
						{tableData.eenheden}
					{/if}
				</td>
				<td>{tableData.total.inclBTW}</td>
			</tr>
		{/if}
	</tbody>
</table>

<style lang="scss">
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 16px 0;
		border-radius: 8px;
		overflow: hidden;
	}
	th {
		text-align: left;
		background-color: black;
		color: white;
		padding: 6px 8px;
		font-weight: normal;
		&:not(:first-child) {
			text-align: right;
		}
	}
	td {
		padding: 4px 8px;
		&:not(:first-child) {
			text-align: right;
		}
	}
	.total td {
		// padding-top: 4px;
		border-top: 2px solid colors.$black-a12;
		font-weight: bold;
	}
	tbody tr:nth-child(2n) td {
		background-color: colors.$black-a08;
	}
	table tr.active td {
		background-color: colors.$success-a40;
	}
</style>
