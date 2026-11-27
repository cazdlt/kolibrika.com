<script lang="ts">
	import Button from '#lib/components/style/Button.svelte';
</script>

<section
	class="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-24 text-center"
>
	<p class="text-xs font-semibold tracking-[0.16em] text-wasabi-600 uppercase">Error 404</p>
	<h1 class="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
		No encontramos esta página.
	</h1>
	<p class="max-w-md text-base leading-relaxed text-ink-muted">
		El enlace puede haber cambiado o ya no está disponible.
	</p>
	<Button href="/" size="md">Volver al inicio</Button>
</section>
