<script>
    import Child3 from "./Child3.svelte";

    let show = true;
</script>

<label>
    <input type="checkbox" bind:checked={show} />
    Show
</label>

{#if show}
    <Child3 on:click/>
    <Child3 on:click/>
{/if}