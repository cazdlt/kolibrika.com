<script lang="ts">
	import type { SellingPoint } from '#lib/types/collections.ts';
	import Button from './style/Button.svelte';

	const sellingPointFiles = import.meta.glob<SellingPoint>('../data/sellingPoints/*.json', {
		eager: true
	});
	const sellingPoints = Object.entries(sellingPointFiles).sort(
		([, a], [, b]) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
	);
</script>

<section
	id="selling-points"
	class="relative isolate scroll-mt-20 overflow-hidden bg-[#141f11] py-20 text-white sm:py-28"
>
	<img
		src="/img/main/hero3.webp"
		alt="Colibrí posado en medio de follaje verde y flores violetas"
		width="1600"
		height="1280"
		loading="lazy"
		decoding="async"
		class="selling-bg absolute inset-0 -z-20 h-full w-full -scale-x-100 object-cover"
	/>
	<div
		class="absolute inset-0 -z-10 bg-[#121c0f]/86 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#121c0f]/95 lg:via-[#121c0f]/82 lg:via-55% lg:to-[#121c0f]/20"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-6xl px-6 sm:px-8">
		<div class="flex max-w-lg flex-col gap-10">
			<div class="flex flex-col gap-3">
				<p class="text-xs font-semibold tracking-[0.12em] text-wasabi-200 uppercase">
					Por qué Kolibrika
				</p>
				<h2
					class="font-display text-3xl leading-tight font-medium tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
				>
					Criterio comercial con capacidad real de ingeniería.
				</h2>
			</div>

			<div class="flex flex-col divide-y divide-white/15 border-y border-white/15">
				{#each sellingPoints as [path, point] (path)}
					<article class="flex flex-col gap-1.5 py-6">
						<h3 class="text-base font-semibold text-white sm:text-lg">{point.title}</h3>
						<p class="text-sm leading-relaxed text-white/80">{point.description}</p>
					</article>
				{/each}
			</div>

			<div>
				<Button href="#contact" variant="light" size="md">Agendar diagnóstico gratuito</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.selling-bg {
		object-position: 85% 50%;

		@media (width >= 64rem) {
			object-position: 22% 50%;
		}
	}
</style>
