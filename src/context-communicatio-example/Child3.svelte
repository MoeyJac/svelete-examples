<script>
    import { getContext } from "svelte";

    const color = getContext('color');
    const onClick = getContext('click');
</script>

<div style="color: {color}">
    Child 3 {color}
    <button on:click={onClick}> Click Me</button>
</div>