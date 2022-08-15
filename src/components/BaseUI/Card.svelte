<script lang="ts">
	export let title = 'Card title';
	export let kostenPerJaar: number | null = 0;
	$: kostenPerMaand = kostenPerJaar ? kostenPerJaar / 12 : null;
	export let sectionList: Sections = [];
	$: cardStatus = sectionList.reduce((prevVal, curVal) => {
		return prevVal && curVal.status === 'success';
	}, true);
	export let footerTitle = 'Totaal';
	export let isFooterVisible = true;
</script>

<section class="card">
	<div class="header">
		<h2>{title}</h2>
	</div>
	<div class="body">
		<slot />
	</div>
	{#if isFooterVisible}
		<div class="footer">
			<h2>{footerTitle}</h2>
			{#if cardStatus}
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
			{:else}
				{#each sectionList as section (section.title)}
					<div class="checklist__item" class:success={section.status === 'success'}>
						<div class="icon">
							{#if section.status === 'success'}
								<span class="material-symbols-outlined line-icon"> check_circle</span>
							{:else}
								<span class="material-symbols-outlined line-icon"> cancel </span>
							{/if}
						</div>
						<a href={'#' + section.id}>{section.title}</a>
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</section>

<style lang="scss">
	.card {
		margin-bottom: 36px;
		background-color: white;
		border-radius: 12px;
		@include media("<tablet"){
			border-radius: 0;
			margin-bottom: 24px;
		};
		.body {
			padding: 0 24px 8px;
			@include media("<tablet"){
				padding: 0 16px 8px;
			}
		}
	}
	.header {
		padding: 24px 24px 16px;
		background-color: white;
		border-radius: 16px 16px 0 0;
		border-bottom: 1px solid colors.$black-a12;
		@include media("<tablet"){
			padding: 24px 16px 16px;
		};
	}
	.header h2 {
		font-size: 36px;
		line-height: 48px;
		@include media("<tablet") {
			@include fonts.h3;
		}
	}

	.footer {
		padding: 24px;
		border-top: 1px solid colors.$black-a12;
		h2 {
			margin-bottom: 16px;
		}
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
			@include media("<tablet"){
				@include fonts.h3;
			}
			.units {
				font-size: 18px;
			}
		}
	}

	.checklist__item {
		display: flex;
		color: colors.$error;
		margin-bottom: 4px;
		.icon {
			width: 24px;
			height: 24px;
			padding-top: 4px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		a {
			margin-left: 8px;
			@include fonts.body;
			transition: color ease-in-out 0.2s;
			font-weight: 500;
			margin-top: 1px;
			color: colors.$error;
			&:hover {
				color: colors.$error-dark;
			}
		}
		&.success {
			color: colors.$success;
			a {
				color: colors.$success;
				&:hover {
					color: colors.$success-dark;
				}
			}
		}
	}
</style>
