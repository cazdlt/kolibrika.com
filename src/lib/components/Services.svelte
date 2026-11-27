<script lang="ts">
	import type { Service } from '#lib/types/collections.ts';
	import Button from './style/Button.svelte';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const serviceFiles = import.meta.glob<Service>('../data/services/*.json', { eager: true });
</script>

<div class="h-max flex flex-col">
	<SectionContainer title="services">
		<div class="bg opacity-20 w-full absolute h-full left-0 top-0 -z-10"></div>
		<SectionTitle title="Nuestros Servicios" />
		<div class="grid grid-cols-fluid content-evenly min-h-max h-full gap-8 justify-items-stretch">
			{#each Object.entries(serviceFiles) as [path, service] (path)}
				<div class="card shadow-xl">
					<div class="card-body">
						<h3 class="card-title">{service.title}</h3>
						<div>{service.description}</div>
					</div>
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

<style>
	.bg {
		background-image: url('/img/main/koliservices.png');
		background-size: auto 40%;
		background-repeat: no-repeat;
		background-position: top right;

		@media (width >= 40rem) {
			background-size: auto 60%;
		}

		@media (width >= 64rem) {
			background-size: auto 80%;
		}
	}
</style>
