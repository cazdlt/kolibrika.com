<script lang="ts">
	import { onMount } from 'svelte';
	import AboutUs from '#lib/components/AboutUs.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Head from '#lib/components/Head.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Methodology from '#lib/components/Methodology.svelte';
	import Partners from '#lib/components/Partners.svelte';
	import SellingPoints from '#lib/components/SellingPoints.svelte';
	import Services from '#lib/components/Services.svelte';
	import { site } from '#lib/data/site.ts';

	interface NetlifyIdentityWidget {
		on: (event: string, cb: (user?: unknown) => void) => void;
	}

	onMount(() => {
		if (!/#(invite|recovery|confirmation|email_change)_token=/.test(window.location.hash)) {
			return;
		}

		const script = document.createElement('script');
		script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
		script.async = true;
		script.onload = () => {
			const identity = (window as Window & { netlifyIdentity?: NetlifyIdentityWidget })
				.netlifyIdentity;
			identity?.on('init', (user) => {
				if (!user) {
					identity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		};
		document.head.appendChild(script);
	});
</script>

<Head canonical="{site.url}/" includeStructuredData={true} />

<Hero />
<Partners />
<Services />
<Methodology />
<SellingPoints />
<AboutUs />
<Faq />
<Contact />
