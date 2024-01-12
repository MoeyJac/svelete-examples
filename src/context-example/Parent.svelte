<script>
    import { setContext } from "svelte";
    import { key } from './context';

    import Child from "./Child.svelte";
    import Child2 from "./Child2.svelte";

    setContext(key, 'red');
</script>

<div style="border: 1px solid black;">
    Parent A
    <Child/>
    <Child2/>
</div>
