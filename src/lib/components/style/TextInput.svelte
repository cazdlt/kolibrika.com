<script lang="ts">
	interface Props {
		label: string;
		name: string;
		type?: string;
		value?: string;
		placeholder?: string;
		required?: boolean;
		error?: string;
	}

	let {
		label,
		name,
		type = 'text',
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
	<input
		{type}
		id={name}
		{name}
		{required}
		{placeholder}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={error ? `${name}-error` : undefined}
		class="min-h-11 w-full rounded-sm border bg-surface-card px-3.5 py-2.5 text-sm text-ink transition-colors duration-200 placeholder:text-ink-muted/50 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-seance-600 {error
			? 'border-red-500'
			: 'border-line hover:border-ink/35 focus-visible:border-seance-700'}"
	/>
	{#if error}
		<p id="{name}-error" class="text-xs font-medium text-red-600" role="alert">
			{error}
		</p>
	{/if}
</div>
