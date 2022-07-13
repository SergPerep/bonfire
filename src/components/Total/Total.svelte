<script>

</script>

<div class="total">
	<header>
		<h2>Total energy expenses</h2>
	</header>
    <div class="body">
	<table>
		<thead>
			<tr>
				<th />
				<th>per year</th>
				<th>per month</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>⚡️ Elektriciteit</td>
				<td>-€172.53</td>
				<td>-€14.38</td>
			</tr>
			<tr>
				<td>🔥 Gas</td>
				<td>€1817.83</td>
				<td>€151.49</td>
			</tr>
		</tbody>
	</table>
</div>
<footer>
    <div class="year">
        <span class="number">1 205</span>
        <span class="unit">€/jaar</span>
    </div>
    <div class="month">
        <span class="number">100</span>
        <span class="unit">€/maand</span>
    </div>
</footer>
</div>

<style lang="scss">
    .total{
        background-color: white;
        border-radius: 12px;
    }
    header{
        padding: 24px 24px 4px;
        border-bottom: 1px solid colors.$black-a12;
        h2{
            @include fonts.h3;
        }
    }
    table{
        border-collapse: collapse;
        width: 100%;
        th, td{
            padding: 10px 18px;
        }
        thead th{
            border-bottom: 1px solid colors.$black-a12;
            color: colors.$black-a30;
            &:not(:first-child) {
                text-align: right;
            }
        }
        tbody td:not(:first-child){
            text-align: right;
        }
    }
    footer{
        padding: 24px;
        border-top: 1px solid colors.$black-a12;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    .year{
        width: calc((100% - 24px) / 2);
        .number{
            @include fonts.h2;
        }
    }
    .month{
        width: calc((100% - 24px) / 2);
        .number{
            @include fonts.h3;
        }
    }

    .unit{
            @include fonts.small;
            font-weight: bold;
        }
</style>
