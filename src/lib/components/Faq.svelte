<script lang="ts">
	import { faqs } from '#lib/data/faq.ts';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';
</script>

<SectionContainer id="faq" tone="alt">
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
