<script lang="ts">
	import SectionBackground from './SectionBackground.svelte';
	export let title: string;
	export let backgroundUrl: string = '';
</script>

<div class="p-8 sm:p-16 flex-grow h-max md:h-auto" id={title}>
	<SectionBackground url={backgroundUrl} />
	<slot />
</div>
