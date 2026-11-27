<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'light' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		wide?: boolean;
		disabled?: boolean;
		href?: string;
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
	}

	let {
		type = 'button',
		variant = 'primary',
		size = 'md',
		wide = false,
		disabled = false,
		href,
		onclick,
		children
	}: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-tight transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seance-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60';

	const variantClasses = {
		primary: 'bg-seance-700 text-white hover:bg-seance-800',
		light: 'bg-white text-ink hover:bg-surface-alt',
		outline: 'border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink/5'
	};

	const sizeClasses = {
		sm: 'min-h-10 px-4 py-2 text-sm',
		md: 'min-h-11 px-6 py-2.5 text-sm',
		lg: 'min-h-12 px-7 py-3 text-base'
	};

	const classes = $derived(
		`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${wide ? 'w-full' : ''}`
	);
</script>

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} class={classes}>
		{@render children?.()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class={classes}>
		{@render children?.()}
	</button>
{/if}
