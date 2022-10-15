<script lang="ts">
	export let type: string = 'button';
	export let wide: boolean = false;
</script>

<button
	class:btn-wide={wide}
	class="btn bg-seance btn-md hover:brightness-125 hover:bg-seance"
	{type}
>
	<slot />
</button>
