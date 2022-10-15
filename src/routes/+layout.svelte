<script>
	import '../app.postcss';
	import Head from '$lib/components/Head.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Head />
<slot />
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap');
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
