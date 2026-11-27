<script lang="ts">
	import { site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
</svelte:head>
