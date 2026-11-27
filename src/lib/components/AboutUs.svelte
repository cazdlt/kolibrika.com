<script lang="ts">
	import type { Person } from '#lib/types/collections.ts';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const peopleFiles = import.meta.glob<Person>('../data/people/*.json', { eager: true });
	const people = Object.entries(peopleFiles).sort(
		([, a], [, b]) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
	);
</script>

<SectionContainer id="about">
	<div class="grid gap-12 lg:grid-cols-12 lg:items-start">
		<div class="lg:col-span-5">
			<SectionTitle
				eyebrow="Equipo"
				title="Dos generaciones, un mismo criterio."
				subtitle="Combinamos más de dos décadas de trayectoria en inteligencia de mercados con ingeniería de datos e inteligencia artificial aplicada."
			/>
		</div>

		<div
			class="grid gap-10 border-t border-line pt-8 sm:grid-cols-2 lg:col-span-7 lg:border-t-0 lg:pt-0"
		>
			{#each people as [path, person] (path)}
				<article class="flex flex-col justify-between gap-5 border-t border-line pt-6">
					<div class="flex flex-col gap-3">
						{#if person.photo}
							<img
								src={person.photo}
								alt={person.name}
								class="h-14 w-14 rounded-full object-cover"
							/>
						{/if}
						<div class="flex flex-col gap-1">
							<h3 class="font-display text-2xl font-medium tracking-tight text-ink">
								{person.name}
							</h3>
							<p class="text-sm font-medium text-seance-700">
								{person.role}
							</p>
						</div>
						<p class="text-sm leading-relaxed text-ink-muted sm:text-base">
							{person.description}
						</p>
					</div>

					{#if person.linkedin}
						<div>
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
							<a
								href={person.linkedin}
								rel="external noopener noreferrer"
								class="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-seance-700 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seance-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									fill="currentColor"
									class="h-3.5 w-3.5"
									aria-hidden="true"
								>
									<path
										d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
									/>
								</svg>
								LinkedIn
							</a>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</SectionContainer>
