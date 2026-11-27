<script lang="ts">
	import { resolve } from '$app/paths';
	import logoUrl from '#lib/assets/logo.svg?url';
	import { site } from '#lib/data/site.ts';

	let menuOpen = $state(false);

	const navLinks = [
		{ label: 'Servicios', hash: '#services' },
		{ label: 'Cómo trabajamos', hash: '#methodology' },
		{ label: 'Equipo', hash: '#about' },
		{ label: 'Experiencia', hash: '#partners' },
		{ label: 'Preguntas', hash: '#faq' }
	];

	function closeMenu() {
		menuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			closeMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="sticky top-0 z-40 border-b border-line bg-surface/92 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 sm:px-8">
		<a
			href={resolve('/')}
			class="flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seance-600"
			aria-label="{site.company} — Inicio"
		>
			<img src={logoUrl} alt={site.company} class="h-9 w-auto" />
		</a>

		<nav aria-label="Navegación principal" class="hidden items-center gap-8 md:flex">
			{#each navLinks as link (link.hash)}
				<a
					href="{resolve('/')}{link.hash}"
					class="text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seance-600"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="{resolve('/')}#contact"
				class="border-b border-seance-700 pb-0.5 text-sm font-semibold text-seance-700 transition-colors duration-200 hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-seance-600"
			>
				Hablemos
			</a>
		</nav>

		<button
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink transition-colors hover:bg-surface-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seance-600 md:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.75"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
				aria-hidden="true"
			>
				{#if menuOpen}
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				{:else}
					<path d="M4 8h16" />
					<path d="M4 16h16" />
				{/if}
			</svg>
		</button>
	</div>

	{#if menuOpen}
		<div id="mobile-menu" class="border-t border-line bg-surface px-6 py-6 md:hidden">
			<nav aria-label="Navegación móvil" class="flex flex-col gap-1">
				{#each navLinks as link (link.hash)}
					<a
						href="{resolve('/')}{link.hash}"
						onclick={closeMenu}
						class="border-b border-line/60 py-3 text-base font-medium text-ink"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="{resolve('/')}#contact"
					onclick={closeMenu}
					class="mt-4 inline-flex min-h-11 items-center justify-center rounded-sm bg-seance-700 px-5 py-2.5 text-sm font-semibold text-white"
				>
					Hablemos
				</a>
			</nav>
		</div>
	{/if}
</header>
