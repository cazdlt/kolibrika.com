<script lang="ts">
	import type { Partner } from '$lib/types/collections';

	const partnerFiles = import.meta.glob<Partner>('../data/partners/*.json', { eager: true });
</script>

<div class="services min-h-screen">
	<div class="bg-opacity-60" />
	<div class="text-center">
		<div class="max-w-md">
			{#each Object.entries(partnerFiles) as [path, partner]}
				{partner.name}
				{partner.testimonial??""}
                <img src={partner.logo} alt={`${partner.name} logo`}>
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
