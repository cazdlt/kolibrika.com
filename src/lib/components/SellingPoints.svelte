<script lang="ts">
	import type { SellingPoint } from '$lib/types/collections';

	const sellingPointFiles = import.meta.glob<SellingPoint>('../data/sellingPoints/*.json', { eager: true });
</script>

<div class="services min-h-screen">
	<div class="bg-opacity-60" />
	<div class="text-center">
		<div class="max-w-md">
			{#each Object.entries(sellingPointFiles) as [path, sellingPoint]}
				{sellingPoint.title}
				{sellingPoint.description}
                <img src={sellingPoint.icon} alt={`${sellingPoint.title} icon`}>
			{/each}
		</div>
	</div>
</div>

<style>
	.services {
		background-image: url("img/main/hdoscolibris.png");
        background-size: auto 60%;
        background-repeat: no-repeat;
        background-position: top right;
	}
</style>
