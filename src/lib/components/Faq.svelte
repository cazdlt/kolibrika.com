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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							class="h-4 w-4 shrink-0 text-seance-700 transition-transform duration-300 ease-[var(--ease-out-expo)] group-open:rotate-45"
							aria-hidden="true"
						>
							<path d="M12 5v14M5 12h14" />
						</svg>
					</summary>
					<p class="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
						{item.answer}
					</p>
				</details>
			{/each}
		</div>
	</div>
</SectionContainer>
