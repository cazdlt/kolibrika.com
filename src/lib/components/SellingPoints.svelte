<script lang="ts">
	import type { SellingPoint } from '$lib/types/collections';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const sellingPointFiles = import.meta.glob<SellingPoint>('../data/sellingPoints/*.json', {
		eager: true
	});
</script>

<div class="min-h-screen h-max flex flex-row">
	<SectionContainer title="services" backgroundUrl="img/main/hdoscolibris.png">
		<SectionTitle title="¿Por qué escogernos?" />
		<div class="grid grid-cols-fluid content-evenly min-h-max h-full gap-8 justify-items-stretch">
			{#each Object.entries(sellingPointFiles) as [path, sellingPoint]}
				<div class="card shadow-xl">
					<div class="card-body  items-center text-center">
						<h3 class="card-title">{sellingPoint.title}</h3>
						<p>{sellingPoint.description}</p>
					</div>
					<figure>
						<img class="w-40 h-40" src={sellingPoint.icon} alt={`${sellingPoint.title} icon`} />
					</figure>
				</div>
			{/each}
		</div>
	</SectionContainer>
</div>
