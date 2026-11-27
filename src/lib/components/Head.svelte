<script lang="ts">
	import { faqs } from '#lib/data/faq.ts';
	import { site } from '#lib/data/site.ts';
	import type { Person, Service } from '#lib/types/collections.ts';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		noindex?: boolean;
		includeStructuredData?: boolean;
	}

	let {
		title = `${site.title} — ${site.tagline}`,
		description = site.description,
		canonical,
		noindex = false,
		includeStructuredData = false
	}: Props = $props();

	const serviceFiles = import.meta.glob<Service>('../data/services/*.json', { eager: true });
	const services = Object.values(serviceFiles).sort(
		(a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
	);

	const peopleFiles = import.meta.glob<Person>('../data/people/*.json', { eager: true });
	const people = Object.values(peopleFiles).sort(
		(a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
	);

	const ogImageUrl = `${site.url}${site.ogImage.path}`;

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfessionalService',
				'@id': `${site.url}/#organization`,
				name: site.company,
				alternateName: site.title,
				url: `${site.url}/`,
				logo: `${site.url}/favicon.svg`,
				image: ogImageUrl,
				description: site.description,
				email: site.social.mail,
				sameAs: [site.social.linkedin],
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Bogotá',
					addressCountry: 'CO'
				},
				areaServed: [
					{ '@type': 'Country', name: 'Colombia' },
					{ '@type': 'Place', name: 'América Latina' }
				],
				founder: people.map((person) => ({
					'@type': 'Person',
					name: person.name,
					jobTitle: person.role,
					...(person.linkedin ? { sameAs: person.linkedin } : {})
				})),
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Servicios de consultoría',
					itemListElement: services.map((service) => ({
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: service.title,
							description: service.description
						}
					}))
				}
			},
			{
				'@type': 'WebSite',
				'@id': `${site.url}/#website`,
				url: `${site.url}/`,
				name: site.company,
				description: site.description,
				inLanguage: 'es-CO',
				publisher: { '@id': `${site.url}/#organization` }
			},
			{
				'@type': 'FAQPage',
				'@id': `${site.url}/#faq`,
				mainEntity: faqs.map((item) => ({
					'@type': 'Question',
					name: item.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: item.answer
					}
				}))
			}
		]
	};

	const jsonLdTag =
		'<script type="application/ld+json">' +
		JSON.stringify(structuredData).replace(/</g, '\\u003c') +
		'</' +
		'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	{#if canonical}
		<link rel="canonical" href={canonical} />
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CO" />
	<meta property="og:site_name" content={site.company} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content={String(site.ogImage.width)} />
	<meta property="og:image:height" content={String(site.ogImage.height)} />
	<meta property="og:image:alt" content={site.ogImage.alt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content={site.ogImage.alt} />
	{#if includeStructuredData}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html jsonLdTag}
	{/if}
</svelte:head>
