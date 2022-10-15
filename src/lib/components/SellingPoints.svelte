<script lang="ts">
	import type { SellingPoint } from '$lib/types/collections';
	import Button from './style/Button.svelte';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const sellingPointFiles = import.meta.glob<SellingPoint>('../data/sellingPoints/*.json', {
		eager: true
	});
</script>

<div class="h-max flex flex-col">
	<SectionContainer title="services">
		<div class="bg opacity-20 w-full absolute h-full left-0 top-0 -z-10" />
		<SectionTitle title="Calidad garantizada" />
		<div class="grid grid-cols-fluid content-evenly min-h-max h-full gap-8 justify-items-stretch">
			{#each Object.entries(sellingPointFiles) as [path, sellingPoint]}
				<div class="card shadow-xl">
					<div class="card-body  items-center text-center">
						<h3 class="card-title">{sellingPoint.title}</h3>
						<p>{sellingPoint.description}</p>
					</div>
					<figure>
						<img
							class="w-40 h-40 mb-8"
							src={sellingPoint.icon}
							alt={`${sellingPoint.title} icon`}
						/>
					</figure>
				</div>
			{/each}
		</div>
		<div class="self-center place-self-center py-8">
			<a href="#contact">
				<Button>Contáctanos</Button>
			</a>
		</div>
	</SectionContainer>
</div>

<style lang="postcss">
	.bg {
		background-image: url('/img/main/doscolibris.png');
		background-size: auto 60%;
		background-repeat: no-repeat;
		background-position: center right;

		@media screen(sm) {
			background-size: auto 60%;
		}

		@media screen(lg) {
			background-size: auto 40%;
			background-image: url('/img/main/hdoscolibris.png');
			background-position: top right;
		}
	}
</style>
