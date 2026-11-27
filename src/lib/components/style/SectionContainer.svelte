<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="p-8 sm:p-12 h-max md:h-auto w-screen relative flex flex-col gap-8" id={title}>
	{@render children?.()}
</div>
