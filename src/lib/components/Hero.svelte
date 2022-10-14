<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<div class="hero min-h-screen">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{site.title}</h1>
			<p class="mb-5">
				{site.description}
			</p>
			<button class="btn bg-seance-600">
				<a href="#services"> Conócenos </a>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">

	.hero {
		background-image: url('img/main/herox.jpg');
		background-size: cover;
		background-position: 40%;
		background-repeat: no-repeat;

		@media screen(sm) {
			background-position: top;
	}
	}
	
	
</style>
