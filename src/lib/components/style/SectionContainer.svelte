<script lang="ts">
	export let title: string;
</script>

<div class="p-8 sm:p-16 flex-grow h-max md:h-auto w-screen relative" id={title}>
	<slot />
</div>
