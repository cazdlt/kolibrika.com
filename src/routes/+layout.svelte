<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Footer from '#lib/components/Footer.svelte';
	import Head from '#lib/components/Head.svelte';
	import Navbar from '#lib/components/Navbar.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Head />
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-seance-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
>
	Ir al contenido principal
</a>
<Navbar />
<main id="main-content" class="overflow-x-clip">
	{@render children()}
</main>
<Footer />
