<script lang="ts">

	export let title = 'Card title';
	export let kostenPerJaar: number | null = 0;
	$: kostenPerMaand = kostenPerJaar ? kostenPerJaar / 12 : null;
	export let sectionList: Sections = [];
	$: cardStatus = sectionList.reduce((prevVal, curVal) => {
		return prevVal && (curVal.status === "success");
	}, true);
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
				<div class="list">
					<div class="icon" class:success={section.status === 'success'}>
						{#if section.status === 'success'}
							<span class="material-symbols-outlined line-icon"> check_circle</span>
						{:else}
							<span class="material-symbols-outlined line-icon"> cancel </span>
						{/if}
					</div>
					<span class="desc">
						{#if section.status === 'error'}
							Fill <a href={"#" + section.id}>{section.title}</a> correctly
						{:else if section.status === 'success'}
							<a href={"#" + section.id}>{section.title}</a>
						{:else}
							Please fill <a href={"#" + section.id}>{section.title}</a>
						{/if}
					</span>
				</div>
			{/each}
		{/if}
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

	.list {
		display: flex;
		justify-content: space-between;
		.desc {
			width: calc(100% - 24px - 4px);
		}
	}

	.icon {
		width: 24px;
		height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: colors.$error;
		&.success {
			color: colors.$success;
		}
	}
</style>
