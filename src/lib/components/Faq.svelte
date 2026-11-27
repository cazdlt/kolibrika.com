<script lang="ts">
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';

	const faqs = [
		{
			question: '¿Solo hacen estudios de mercado o también desarrollan datos, BI e IA?',
			answer:
				'Hacemos ambas cosas. Podemos entregar desde un estudio puntual de competencia o portafolio hasta la arquitectura completa: pipelines automatizados, data warehouse, tableros de BI, portales web con permisos por rol y soluciones con IA aplicada sobre tus propios datos.'
		},
		{
			question: '¿Trabajan solo con industria farmacéutica y salud veterinaria?',
			answer:
				'Nuestra mayor trayectoria está en farma y salud animal, sectores con alta exigencia regulatoria y canales complejos. Sin embargo, tanto nuestra metodología de inteligencia de mercados como nuestra arquitectura de BI aplican a cualquier empresa B2B.'
		},
		{
			question: '¿Qué incluye la asesoría inicial gratuita?',
			answer:
				'Es una conversación de 30 minutos para revisar tu reto comercial o tus fuentes de datos actuales, validar qué enfoque tiene mayor retorno y definir un posible alcance sin compromiso.'
		},
		{
			question: '¿Con qué fuentes de datos pueden integrarse?',
			answer:
				'Integramos bases de datos corporativas (SQL Server, PostgreSQL), ERPs, archivos de Excel, SharePoint, correo y fuentes externas de mercado en un solo repositorio confiable y actualizado automáticamente.'
		},
		{
			question: '¿Cómo manejan la confidencialidad de la información?',
			answer:
				'Firmamos acuerdos de confidencialidad (NDA) desde la primera reunión si tu equipo lo requiere. Las bases de datos, despliegues e infraestructura pueden operar dedicados y aislados para tu organización.'
		}
	];
</script>

<SectionContainer id="faq">
	<div class="grid gap-12 lg:grid-cols-12 lg:items-start">
		<div class="lg:col-span-4">
			<SectionTitle eyebrow="Preguntas frecuentes" title="Antes de empezar." />
		</div>

		<div class="divide-y divide-line border-y border-line lg:col-span-8">
			{#each faqs as item (item.question)}
				<details class="group py-5">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seance-600 [&::-webkit-details-marker]:hidden"
					>
						<span>{item.question}</span>
						<span
							class="shrink-0 font-mono text-lg text-seance-700 transition-transform duration-300 ease-[var(--ease-out-expo)] group-open:rotate-45"
							aria-hidden="true"
						>
							+
						</span>
					</summary>
					<p class="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
						{item.answer}
					</p>
				</details>
			{/each}
		</div>
	</div>
</SectionContainer>
