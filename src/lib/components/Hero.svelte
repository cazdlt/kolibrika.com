<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<div class="hero min-h-screen">
	<div class="hero-overlay bg-opacity-20" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-7xl font-bold">{site.title}</h1>
			<p class="mb-5 text-lg">
				{site.description}
			</p>
			<a href="#services">
			<button class="btn bg-seance-600 btn-md hover:brightness-150 hover:bg-seance-600">
				 Conócenos 
			</button>
		</a>
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
