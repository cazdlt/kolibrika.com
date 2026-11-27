<script lang="ts">
	import { site } from '#lib/data/site.ts';
	import Button from './style/Button.svelte';
	import SectionContainer from './style/SectionContainer.svelte';
	import SectionTitle from './style/SectionTitle.svelte';
	import TextArea from './style/TextArea.svelte';
	import TextInput from './style/TextInput.svelte';

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let message = $state('');
	let botField = $state('');

	let errors = $state<Record<string, string>>({});
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	function validate() {
		const nextErrors: Record<string, string> = {};
		if (!name.trim()) nextErrors.name = 'Ingresa tu nombre.';
		if (!email.trim()) {
			nextErrors.email = 'Ingresa tu correo electrónico.';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			nextErrors.email = 'Ingresa un correo electrónico válido.';
		}
		if (!message.trim()) nextErrors.message = 'Cuéntanos brevemente qué necesitas evaluar.';
		errors = nextErrors;
		return Object.keys(nextErrors).length === 0;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;

		status = 'submitting';
		errorMessage = '';

		const payload = new URLSearchParams({
			'form-name': 'contact',
			'bot-field': botField,
			name: name.trim(),
			mail: email.trim(),
			company: company.trim(),
			message: message.trim()
		});

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: payload.toString()
			});

			if (!response.ok) {
				throw new Error('No fue posible enviar el formulario.');
			}

			status = 'success';
			name = '';
			email = '';
			company = '';
			message = '';
			errors = {};
		} catch {
			status = 'error';
			errorMessage = `No pudimos enviar el mensaje en este momento. Intenta de nuevo o escríbenos a ${site.social.mail}.`;
		}
	}
</script>

<SectionContainer id="contact">
	<div class="grid gap-12 lg:grid-cols-12 lg:items-start">
		<div class="flex flex-col gap-6 lg:col-span-5">
			<SectionTitle
				eyebrow="Contacto"
				title="Hablemos de tu mercado o tus datos."
				subtitle="Agenda una sesión diagnóstica inicial de 30 minutos sin costo ni compromiso."
			/>

			<div class="flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-muted">
				<p>{site.location} · Atención para toda la región</p>
				<a
					href="mailto:{site.social.mail}"
					class="w-fit font-medium text-seance-700 underline decoration-seance-200 underline-offset-4 transition-colors hover:text-ink"
				>
					{site.social.mail}
				</a>
			</div>
		</div>

		<div class="lg:col-span-7">
			{#if status === 'success'}
				<div class="flex flex-col gap-4 border-l-2 border-wasabi-600 py-4 pl-6" role="status">
					<h3 class="font-display text-2xl font-medium text-ink">Mensaje recibido</h3>
					<p class="max-w-md text-sm leading-relaxed text-ink-muted">
						Gracias por escribirnos. Revisaremos tu solicitud y te responderemos pronto para
						coordinar la sesión inicial.
					</p>
					<div class="pt-2">
						<Button variant="outline" size="sm" type="button" onclick={() => (status = 'idle')}>
							Enviar otro mensaje
						</Button>
					</div>
				</div>
			{:else}
				<form
					name="contact"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					novalidate
					onsubmit={handleSubmit}
					class="flex flex-col gap-5"
				>
					<input type="hidden" name="form-name" value="contact" />
					<p class="hidden">
						<label>
							No llenar este campo:
							<input name="bot-field" bind:value={botField} />
						</label>
					</p>

					<div class="grid gap-5 sm:grid-cols-2">
						<TextInput
							label="Nombre"
							name="name"
							placeholder="Tu nombre"
							required={true}
							bind:value={name}
							error={errors.name}
						/>
						<TextInput
							label="Correo"
							name="mail"
							type="email"
							placeholder="nombre@empresa.com"
							required={true}
							bind:value={email}
							error={errors.email}
						/>
					</div>

					<TextInput
						label="Empresa (opcional)"
						name="company"
						placeholder="Nombre de tu empresa o sector"
						bind:value={company}
					/>

					<TextArea
						label="Mensaje"
						name="message"
						placeholder="Cuéntanos si buscas un estudio de mercado, una plataforma de BI o automatizar procesos con datos e IA."
						required={true}
						bind:value={message}
						error={errors.message}
					/>

					{#if status === 'error'}
						<p
							class="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700"
							role="alert"
						>
							{errorMessage}
						</p>
					{/if}

					<div class="pt-1">
						<Button type="submit" size="lg" disabled={status === 'submitting'}>
							{status === 'submitting' ? 'Enviando...' : 'Solicitar sesión diagnóstica'}
						</Button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</SectionContainer>
