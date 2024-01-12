<script>
    import {createEventDispatcher} from 'svelte';
    export let name = 'defaultName';
    export let status = 'defaultStatus';

    let skillPoints = 0;

    const dispatch = createEventDispatcher();

    $: dispatch('skillPointChanged', skillPoints)

    function decrement(){skillPoints --;}
    function increment(){skillPoints ++;}

</script>

<div>
    {name}
</div>
<div>
    {status}
</div>

<button on:click={decrement}>-</button>
{skillPoints}
<button on:click={increment}>+</button>