<script lang="ts">
	import Button from './style/Button.svelte';
</script>

<section
	id="top"
	class="relative isolate flex min-h-[84vh] items-end overflow-hidden bg-[#1e2d18] sm:items-center"
>
	<img
		src="/img/main/hero-extended.webp"
		alt="Colibrí en vuelo frente a flores violetas"
		width="1376"
		height="768"
		fetchpriority="high"
		decoding="async"
		class="hero-bg absolute inset-0 -z-20 h-full w-full object-cover"
	/>
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-t from-[#101a0d]/92 via-[#101a0d]/70 via-55% to-[#101a0d]/25 sm:bg-gradient-to-r sm:from-[#101a0d]/82 sm:via-[#101a0d]/45 sm:via-50% sm:to-transparent"
		aria-hidden="true"
	></div>

	<div class="mx-auto w-full max-w-6xl px-6 pt-48 pb-16 sm:px-8 sm:py-24 lg:py-28">
		<div class="flex max-w-md flex-col gap-5 text-white lg:max-w-[480px]">
			<p class="font-mono text-xs font-medium tracking-[0.14em] text-wasabi-200 uppercase">
				Inteligencia de mercados · Datos · IA
			</p>
			<h1
				class="font-display text-4xl leading-[1.06] font-medium tracking-tight sm:text-5xl lg:text-[3.4rem]"
			>
				Decisiones comerciales sobre cifras vivas.
			</h1>
			<p class="max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
				Unimos consultoría de mercados con ingeniería de datos, plataformas de BI y automatización
				con IA para equipos comerciales en Colombia y la región.
			</p>
			<div class="flex flex-wrap items-center gap-6 pt-2">
				<Button href="#contact" variant="light" size="lg">Agendar diagnóstico gratuito</Button>
				<a
					href="#services"
					class="border-b border-white/50 pb-0.5 text-sm font-medium text-white transition-colors hover:border-white"
				>
					Ver servicios
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-bg {
		object-position: 62% 20%;

		@media (width >= 40rem) {
			object-position: 62% center;
		}

		@media (width >= 64rem) {
			object-position: right center;
		}
	}
</style>
