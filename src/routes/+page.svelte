<script lang="ts">
	import AboutUs from '#lib/components/AboutUs.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Methodology from '#lib/components/Methodology.svelte';
	import Partners from '#lib/components/Partners.svelte';
	import SellingPoints from '#lib/components/SellingPoints.svelte';
	import Services from '#lib/components/Services.svelte';
</script>

<svelte:head>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>

<Hero />
<Partners />
<Services />
<Methodology />
<SellingPoints />
<AboutUs />
<Faq />
<Contact />
