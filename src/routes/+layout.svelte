<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Footer from '#lib/components/Footer.svelte';
	import Head from '#lib/components/Head.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Head />
{@render children()}
<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
