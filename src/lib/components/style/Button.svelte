<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		type?: 'button' | 'submit' | 'reset';
		wide?: boolean;
		children?: Snippet;
	}

	let { type = 'button', wide = false, children }: Props = $props();
</script>

<button
	class:btn-wide={wide}
	class="btn bg-seance btn-md hover:brightness-125 hover:bg-seance border-seance text-neutral-content"
	{type}
>
	{@render children?.()}
</button>
