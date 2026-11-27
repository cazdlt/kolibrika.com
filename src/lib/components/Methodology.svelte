<script lang="ts">
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const steps = [
		{
			number: '01',
			label: 'Diagnóstico',
			title: 'Sesión inicial sin costo',
			description:
				'Entendemos tu reto comercial, tus fuentes de información actuales y definimos si necesitas un estudio puntual, automatización de datos o una plataforma de BI.'
		},
		{
			number: '02',
			label: 'Construcción',
			title: 'Análisis e ingeniería',
			description:
				'Levantamos inteligencia de mercado o integramos tus fuentes (ERP, bases de datos, Excel) en modelos limpios, verificables y confidenciales.'
		},
		{
			number: '03',
			label: 'Operación',
			title: 'Decisiones en marcha',
			description:
				'Entregamos hallazgos ejecutivos y tableros o portales con permisos por rol y zona, listos para que tu equipo comercial los use todos los días.'
		}
	];
</script>

<SectionContainer id="methodology" tone="alt">
	<SectionTitle
		eyebrow="Cómo trabajamos"
		title="Un proceso directo, del diagnóstico a la operación."
	/>

	<ol class="grid gap-10 md:grid-cols-3 md:gap-8">
		{#each steps as step (step.number)}
			<li class="flex flex-col gap-3 border-t border-ink/20 pt-6">
				<div class="flex items-baseline gap-2.5">
					<span class="font-display text-base font-medium text-seance-700 tabular-nums">
						{step.number}
					</span>
					<span class="text-xs font-semibold tracking-[0.1em] text-ink-muted uppercase">
						{step.label}
					</span>
				</div>
				<h3 class="text-lg font-semibold text-ink">{step.title}</h3>
				<p class="text-sm leading-relaxed text-ink-muted">{step.description}</p>
			</li>
		{/each}
	</ol>
</SectionContainer>
