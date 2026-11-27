<script lang="ts">
	interface Props {
		label: string;
		name: string;
		rows?: number;
		value?: string;
		placeholder?: string;
		required?: boolean;
		error?: string;
	}

	let {
		label,
		name,
		rows = 4,
		value = $bindable(''),
		placeholder = '',
		required = false,
		error = ''
	}: Props = $props();
</script>

<div class="flex flex-col gap-1.5">
	<label for={name} class="text-xs font-semibold tracking-wider text-ink-muted uppercase">
		{label}{#if required}<span class="ml-0.5 text-seance-700" aria-hidden="true">*</span>{/if}
	</label>
	<textarea
		id={name}
		{name}
		{rows}
		{required}
		{placeholder}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={error ? `${name}-error` : undefined}
		class="w-full resize-y rounded-sm border bg-surface-card px-3.5 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-ink-muted/50 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-seance-600 {error
			? 'border-red-500'
			: 'border-line hover:border-ink/35 focus-visible:border-seance-700'}"></textarea>
	{#if error}
		<p id="{name}-error" class="text-xs font-medium text-red-600" role="alert">
			{error}
		</p>
	{/if}
</div>
