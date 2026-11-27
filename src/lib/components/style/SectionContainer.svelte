<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id: string;
		tone?: 'default' | 'alt';
		children?: Snippet;
	}

	let { id, tone = 'default', children }: Props = $props();
</script>

<section
	{id}
	class="relative scroll-mt-20 py-20 sm:py-24 {tone === 'alt'
		? 'border-y border-line bg-surface-alt'
		: 'bg-surface'}"
>
	<div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-8">
		{@render children?.()}
	</div>
</section>
