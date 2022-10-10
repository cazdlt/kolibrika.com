<script lang="ts">
	import AboutUs from '$lib/components/AboutUs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import SellingPoints from '$lib/components/SellingPoints.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<svelte:head>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>

<div>
	<Hero />
	<Services />
	<SellingPoints />
	<Partners />
	<AboutUs />
	<Contact />
</div>
