<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';;

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

<div class="w-full h-auto" transition:fade={{ delay: 500, duration: 2000 }}>
    <slot />
</div>