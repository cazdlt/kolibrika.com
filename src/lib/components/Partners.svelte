<script lang="ts">
	import type { Partner } from '#lib/types/collections.ts';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const partnerFiles = import.meta.glob<Partner>('../data/partners/*.json', { eager: true });
	const partners = Object.entries(partnerFiles);
</script>

<SectionContainer id="partners" tone="alt">
	<div class="grid gap-10 lg:grid-cols-12 lg:items-center">
		<div class="lg:col-span-6">
			<SectionTitle
				eyebrow="Experiencia"
				title="Probados en farma y salud veterinaria, listos para cualquier operación B2B."
				subtitle="Hemos construido desde diagnósticos de mercado hasta plataformas completas de BI y automatización de datos para equipos comerciales exigentes."
			/>
		</div>

		<div class="flex flex-wrap items-center gap-x-12 gap-y-8 lg:col-span-6 lg:justify-end">
			{#each partners as [path, partner] (path)}
				<img
					src={partner.logo}
					alt="Logo de {partner.name}"
					class="max-h-20 w-auto max-w-[230px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
				/>
			{/each}
		</div>
	</div>
</SectionContainer>
