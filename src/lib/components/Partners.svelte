<script lang="ts">
	import type { Partner } from '$lib/types/collections';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const partnerFiles = import.meta.glob<Partner>('../data/partners/*.json', { eager: true });
	const partners = Object.entries(partnerFiles);
</script>

<div class="h-max relative">
	<SectionContainer title="partners">
		<SectionTitle title="Transformamos negocios" />
		<div class="wave wave-top">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
					class="shape-fill"
				/>
			</svg>
		</div>
		<div class="bg" />
		<div class="partners-grid">
			{#each partners as [path, partner], i}
				<img src={partner.logo} alt={`${partner.name} logo`} class="object-contain" />
			{/each}
		</div>
		<div class="wave wave-bot">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					class="shape-fill"
				/>
			</svg>
		</div>
	</SectionContainer>
</div>

<style lang="postcss">
	.bg {
		background-color: theme(colors.wasabi.50);
		opacity: 20%;
		top: 50px;
		left: 0;
		width: 100%;
		height: calc(100% - 100px);
		position: absolute;
		z-index: -10;
	}
	.wave {
		position: absolute;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		opacity: 20%;
		.shape-fill {
			fill: theme(colors.wasabi.50);
		}
		svg {
			position: relative;
			display: block;
			width: calc(100% + 1.3px);
			height: 50px;
		}
	}
	.wave-top {
		top: 0;
		left: 0;
	}
	.wave-bot {
		bottom: 0;
		left: 0;
	}

	.partners-grid {
		display: grid;
		filter: grayscale(100%);
		grid-template-columns: repeat(auto-fit, minmax(12rem, 18rem));
		place-content: center;

		@media screen(md) {
			gap: 4rem;
			padding: 4rem 0;
			
		}
	}
</style>
