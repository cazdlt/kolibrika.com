<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		subtitle?: string;
	}

	let { eyebrow, title, subtitle }: Props = $props();
</script>

<div class="flex max-w-2xl flex-col gap-3">
	{#if eyebrow}
		<p class="font-mono text-xs font-medium tracking-[0.14em] text-wasabi-600 uppercase">
			{eyebrow}
		</p>
	{/if}
	<h2
		class="font-display text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]"
	>
		{title}
	</h2>
	{#if subtitle}
		<p class="text-base leading-relaxed text-ink-muted">
			{subtitle}
		</p>
	{/if}
</div>
