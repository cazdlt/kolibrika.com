<script lang="ts">
	import { resolve } from '$app/paths';
	import logoUrl from '#lib/assets/logoWhite.svg?url';
	import { site } from '#lib/data/site.ts';
</script>

<footer class="bg-[#141f11] text-white">
	<div class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-8">
		<div class="flex flex-col justify-between gap-8 md:flex-row md:items-center">
			<div class="flex flex-col gap-3">
				<a href={resolve('/')} class="w-fit" aria-label="{site.company} — Inicio">
					<img src={logoUrl} alt={site.company} class="white-logo h-9 w-auto" />
				</a>
				<p class="max-w-sm text-sm text-white/80">{site.tagline}</p>
				<p class="text-xs text-white/70">{site.location}</p>
			</div>

			<div class="flex flex-col gap-4 md:items-end">
				<nav
					aria-label="Navegación de pie de página"
					class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80"
				>
					<a href="{resolve('/')}#services" class="transition-colors hover:text-wasabi-200">
						Servicios
					</a>
					<a href="{resolve('/')}#methodology" class="transition-colors hover:text-wasabi-200">
						Cómo trabajamos
					</a>
					<a href="{resolve('/')}#about" class="transition-colors hover:text-wasabi-200">
						Equipo
					</a>
					<a href="{resolve('/')}#partners" class="transition-colors hover:text-wasabi-200">
						Experiencia
					</a>
					<a href="{resolve('/')}#faq" class="transition-colors hover:text-wasabi-200">
						Preguntas
					</a>
					<a href="{resolve('/')}#contact" class="transition-colors hover:text-wasabi-200">
						Contacto
					</a>
				</nav>

				<div class="flex items-center gap-4">
					<a
						href="mailto:{site.social.mail}"
						aria-label="Correo electrónico"
						class="p-1.5 text-white/75 transition-colors hover:text-wasabi-200"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							class="h-5 w-5"
							aria-hidden="true"
						>
							<path
								d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
							/>
						</svg>
					</a>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a
						href={site.social.linkedin}
						rel="external noopener noreferrer"
						aria-label="LinkedIn"
						class="p-1.5 text-white/75 transition-colors hover:text-wasabi-200"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							fill="currentColor"
							class="h-5 w-5"
							aria-hidden="true"
						>
							<path
								d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center"
		>
			<p>{site.company} © {new Date().getFullYear()}.</p>
			<p>
				Sitio diseñado y construido por
				<a
					href="https://zamoradelatorre.com/"
					rel="external noopener noreferrer"
					class="underline transition-colors hover:text-wasabi-200"
				>
					Andrés Zamora
				</a>
			</p>
		</div>
	</div>
</footer>

<style>
	.white-logo {
		filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(95deg) brightness(98%) contrast(107%);
	}
</style>
