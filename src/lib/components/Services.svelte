<script lang="ts">
	import type { Service } from '$lib/types/collections';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const serviceFiles = import.meta.glob<Service>('../data/services/*.json', { eager: true });
</script>

<div class="min-h-screen h-max flex flex-row">
	<SectionContainer title="services" backgroundUrl="img/main/koliservices.png">
		<SectionTitle title="Nuestros Servicios" />
		<div class="grid grid-cols-fluid content-evenly min-h-max h-full gap-8 justify-items-stretch">
			{#each Object.entries(serviceFiles) as [path, service]}
				<div class="card shadow-xl">
					<div class="card-body">
						<h3 class="card-title">{service.title}</h3>
						<div class="">{service.description}</div>
					</div>
				</div>
			{/each}
		</div>
	</SectionContainer>
</div>
