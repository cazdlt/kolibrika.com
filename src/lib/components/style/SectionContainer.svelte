<script lang="ts">
	export let title: string;
</script>

<div class="p-8 sm:p-16 h-max md:h-auto w-screen relative flex flex-col gap-8" id={title}>
	<slot />
</div>
