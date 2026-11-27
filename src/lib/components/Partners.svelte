<script lang="ts">
	import type { Partner } from '#lib/types/collections.ts';

	const partnerFiles = import.meta.glob<Partner>('../data/partners/*.json', { eager: true });
	const partners = Object.entries(partnerFiles);
</script>

<section
	id="partners"
	class="relative scroll-mt-20 border-b border-line bg-surface-alt py-12 sm:py-14"
>
	<div class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8">
		<div class="grid gap-8 lg:grid-cols-12 lg:items-center">
			<div class="flex flex-col gap-2 lg:col-span-6">
				<p class="font-mono text-xs font-medium tracking-[0.14em] text-wasabi-600 uppercase">
					Experiencia
				</p>
				<h2
					class="font-display text-2xl leading-snug font-medium tracking-tight text-ink sm:text-[1.75rem]"
				>
					Probados en farma y salud veterinaria, listos para cualquier operación B2B.
				</h2>
			</div>

			<div
				class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:justify-start lg:col-span-6 lg:justify-end"
			>
				{#each partners as [path, partner] (path)}
					<img
						src={partner.logo}
						alt="Logo de {partner.name}"
						class="h-11 w-auto max-w-[220px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-12"
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
