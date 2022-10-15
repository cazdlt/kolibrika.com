<script lang="ts">
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';
	import TextArea from './style/TextArea.svelte';
	import TextInput from './style/TextInput.svelte';
</script>

<SectionContainer title="partners">
	<SectionTitle title="Hablemos" />
	<div class="bg opacity-20 w-full absolute h-full right-20 top-0 -z-10" />
	<form class="form-control flex gap-8 w-full md:w-1/2">
		<TextInput label="Nombre" name="name" />
		<TextInput label="Correo" name="mail" type="email" />
		<TextArea label="Mensaje" name="message" />
		<button
			class="btn btn-wide bg-seance-600 btn-md hover:brightness-150 hover:bg-seance-600"
			type="submit"
		>
			Enviar
		</button>
	</form>
</SectionContainer>

<style lang="postcss">
	.bg {
		@media screen(md) {
			background-image: url('img/main/hummingright.png');
			background-size: auto 60%;
			background-repeat: no-repeat;
			background-position: center right;
		}
	}
</style>
