<script>
    import GrandChildA from "./GrandChildA.svelte";
    import {setContext } from 'svelte';
    import {key} from './context';

    setContext(key, 'blue')
</script>

<GrandChildA />