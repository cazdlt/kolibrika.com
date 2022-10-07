<script lang="ts">
	import type { Service } from '$lib/types/collections';

	const serviceFiles = import.meta.glob<Service>('../data/services/*.json', { eager: true });
</script>

<div class="services min-h-screen">
	<div class="bg-opacity-60" />
	<div class="text-center">
		<div class="max-w-md">
			{#each Object.entries(serviceFiles) as [path, service]}
				{service.title}
				{service.description}
			{/each}
		</div>
	</div>
</div>

<style>
	.services {
		background-image: url("img/main/koliservices.png");
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: top right;
	}
</style>
