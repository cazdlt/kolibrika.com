<script lang="ts">
	import logoUrl from '$lib/assets/logoWhite.svg?url';
	import Fa from 'svelte-fa';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { site } from '$lib/data/site';
</script>

<div class="spacer" />
<footer class="bg-seance text-white">
	<div class="flex flex-col items-center gap-4 pb-12">
		<img src={logoUrl} alt="logo kolibrika" class="white-logo" />
		<p class="text-xl">{site.company} © {new Date().getFullYear()}</p>
		<p class="text-lg">{site.location}</p>
		<div class="flex gap-4  items-center">
			<a href="mailto:{site.social.mail}" class="hover:text-wasabi-50">
				<Fa icon={faEnvelope} size="2x" />
			</a>
			<a href={site.social.linkedin} class="hover:text-wasabi-50">
				<Fa icon={faLinkedin} size="2x" />
			</a>
		</div>
	</div>

	<div class="text-xs text-center py-8">
		Sitio diseñado y construido por <a
			href="https://zamoradelatorre.com/"
			class="hover:text-wasabi-50 underline"
		>
			Andrés Zamora</a
		>, 2022
	</div>
</footer>

<style>
	.white-logo {
		filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(95deg) brightness(98%) contrast(107%);
	}
	.spacer {
		background-image: url('/img/main/footerWaves.svg');
		aspect-ratio: 960/200;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
