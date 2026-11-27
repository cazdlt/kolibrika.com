<script lang="ts">
	import { site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>{site.company} — {site.tagline}</title>
	<meta name="description" content={site.description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CO" />
	<meta property="og:site_name" content={site.company} />
	<meta property="og:title" content="{site.company} — {site.tagline}" />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content="{site.url}/img/main/hero-extended.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{site.company} — {site.tagline}" />
	<meta name="twitter:description" content={site.description} />
</svelte:head>
