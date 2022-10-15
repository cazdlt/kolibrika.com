<script lang="ts">
	export let color: string = 'seance-600';
	export let type: string = 'button';
	export let wide: boolean = false;
</script>

<button
	class:btn-wide={wide}
	class="btn bg-{color} btn-md hover:brightness-125 hover:bg-{color}"
	{type}
>
	<slot />
</button>
