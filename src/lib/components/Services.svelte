<script lang="ts">
	import type { Service } from '#lib/types/collections.ts';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const serviceFiles = import.meta.glob<Service>('../data/services/*.json', { eager: true });
	const services = Object.entries(serviceFiles);
</script>

<SectionContainer id="services">
	<div class="grid gap-12 lg:grid-cols-12 lg:items-start">
		<div class="flex flex-col gap-8 lg:col-span-5">
			<SectionTitle
				eyebrow="Servicios"
				title="De la pregunta estratégica al sistema de datos que la responde."
				subtitle="Combinamos criterio de negocio con ingeniería moderna: desde estudios puntuales de mercado hasta plataformas completas de analítica comercial."
			/>
			<div class="hidden max-w-[250px] pt-2 lg:block">
				<img
					src="/img/main/koliservices.png"
					alt="Colibrí posado sobre una rama"
					class="h-auto w-full object-contain mix-blend-multiply"
				/>
			</div>
		</div>

		<div class="flex flex-col divide-y divide-line border-y border-line lg:col-span-7">
			{#each services as [path, service], index (path)}
				<article class="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6">
					<span class="font-mono text-xs font-medium text-seance-700 sm:col-span-2 sm:pt-1.5">
						0{index + 1}
					</span>
					<div class="flex flex-col gap-2 sm:col-span-10">
						<h3 class="text-lg font-semibold tracking-tight text-ink sm:text-xl">
							{service.title}
						</h3>
						<p class="text-sm leading-relaxed text-ink-muted sm:text-base">
							{service.description}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</SectionContainer>
