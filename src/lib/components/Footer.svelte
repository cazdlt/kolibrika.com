<script>
	import Logo from '$lib/assets/logoMobile.svg';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="footer items-center p-4 bg-white text-russian-violet">
	<div class="items-center grid-flow-col">
		<Logo />
	</div>
	<div
		class="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-russian-violet"
		target="_blank"
		aria-label="social"
		rel="noopener"
	>
		<p>Kolibrika Consultores © 2022</p>
		<a href="https://www.linkedin.com/in/nancydelatorre/">
			<Fa icon={faLinkedinIn} size="2x" />
		</a>
	</div>
</footer>
