<script lang="ts">
	import type { Person } from '$lib/types/collections';

	const peopleFiles = import.meta.glob<Person>('../data/people/*.json', { eager: true });
</script>

<div class="services min-h-screen">
	<div class="bg-opacity-60" />
	<div class="text-center">
		<div class="max-w-md">
			{#each Object.entries(peopleFiles) as [path, person]}
				{person.name}
				{person.description}
                <img src={person.photo} alt={`${person.name} photo`}>
			{/each}
		</div>
	</div>
</div>

<style>
	.services {
		background-image: url("/img/main/hummingleft.png");
        background-size: auto 40%;
        background-repeat: no-repeat;
        background-position: top left;
	}
</style>
