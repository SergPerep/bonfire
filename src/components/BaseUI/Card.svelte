<script lang="ts">
	export let title = 'Card title';
	export let kostenPerJaar: number | null = 0;
	$: kostenPerMaand = kostenPerJaar ? kostenPerJaar / 12 : null;
</script>

<section class="card">
	<div class="header">
		<h2>{title}</h2>
	</div>
	<div class="body">
		<slot />
	</div>
	<div class="footer">
		<h3>Totaal Elektriciteit kosten</h3>
		<div class="container">
			<div class="col">
				<div class="title">Everage per year</div>
				<div class="desc">
					<span class="value">{kostenPerJaar ? kostenPerJaar.toFixed(2) : ''}</span>
					<span class="units">€/jaar</span>
				</div>
			</div>
			<div class="col">
				<div class="title">Everage per month</div>
				<div class="desc">
					<span class="value">{kostenPerMaand ? kostenPerMaand.toFixed(2) : ''}</span>
					<span class="units">€/maand</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.card {
		margin-bottom: 36px;
		background-color: white;
		border-radius: 12px;
		.body {
			padding: 0 24px 8px;
		}
	}
	.header {
		padding: 24px 24px 16px;
		background-color: white;
		border-radius: 16px 16px 0 0;
		border-bottom: 1px solid colors.$black-a12;
	}
	h2 {
		font-size: 36px;
		line-height: 48px;
	}
	h3 {
		margin-bottom: 16px;
	}
	.footer {
		padding: 24px;
		border-top: 1px solid colors.$black-a12;
	}
	.container {
		display: flex;
		justify-content: space-between;
		.col {
			width: calc((100% - 24px) / 2);
		}
		.title {
			@include fonts.small;
			color: colors.$black-a60;
			padding-bottom: 8px;
		}
		.desc {
			@include fonts.h2;
			.units {
				font-size: 18px;
			}
		}
	}
</style>
