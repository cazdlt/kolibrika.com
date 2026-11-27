<script lang="ts">
	import type { Service } from '#lib/types/collections.ts';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const serviceFiles = import.meta.glob<Service>('../data/services/*.json', { eager: true });
	const services = Object.entries(serviceFiles).sort(
		([, a], [, b]) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
	);
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
					src="/img/main/koliservices.webp"
					alt="Colibrí posado sobre una rama"
					width="600"
					height="953"
					loading="lazy"
					decoding="async"
					class="h-auto w-full -scale-x-100 object-contain mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
				/>
			</div>
		</div>

		<div class="flex flex-col divide-y divide-line border-y border-line lg:col-span-7">
			{#each services as [path, service], index (path)}
				<article class="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-6">
					<span
						class="w-8 shrink-0 font-display text-base font-medium text-seance-700 tabular-nums"
					>
						0{index + 1}
					</span>
					<div class="flex flex-col gap-2">
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
