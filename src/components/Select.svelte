<script lang="ts">
	export let label = 'Label';
	export let suffix: string | null = null;
	export let optionList: { year: number; value: number }[];

	const handleFieldClick = () => {
		const selectEl = document.querySelector('select');
		if (selectEl) selectEl.focus();
	};
</script>

<div class="select-field">
	<label for="select">{label}</label>
	<div class="field" on:click={handleFieldClick}>
		<select id="#select">
			{#each optionList as option (option.year)}
				<optgroup label={`${option.year}`}>
					<option value={option.value}>{option.value}</option>
				</optgroup>
			{/each}
		</select>
		<div class="appendix">
			{#if suffix} <span class="suffix">{suffix}</span> {/if}
			<div class="arrow-icon">
				<span class="material-symbols-outlined"> arrow_drop_down </span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.field {
		background-color: colors.$black-a08;
		border-radius: 8px;
		display: flex;
		align-items: baseline;
		margin-bottom: 16px;
		position: relative;
	}
	label {
		padding-bottom: 8px;
		display: block;
		@include fonts.small;
		color: colors.$black-a60;
	}
	select {
		width: 100%;
		border: none;
		background-color: transparent;
		padding: 12px;
		appearance: none;
		@include fonts.body;
	}
	.appendix {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		height: 100%;
		align-items: center;
		pointer-events: none; // lets click pas through .appendix to select
		.suffix {
			@include fonts.body;
			color: colors.$black-a60;
		}
		.arrow-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 40px;
		}
	}
</style>
