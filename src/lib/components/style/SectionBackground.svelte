<script lang="ts">
	export let url: string;
</script>

<div class="bg opacity-20 w-full absolute h-full" style="background-image: url({url});" />

<style lang="postcss">
	.bg {
		/* background-image: url({url}); */
		background-size: auto 40%;
		background-repeat: no-repeat;
		background-position: top right;

		@media screen(sm) {
			background-size: auto 60%;
		}

		@media screen(lg) {
			background-size: auto 80%;
		}
	}
</style>