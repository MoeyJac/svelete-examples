<script>
    import { store1, store2, store3 } from './data';
</script>

<h1>store1: {$store1}</h1>
<h1>store2: {$store2}</h1>

{$store3}

<button on:click={() => {
    $store3 = 'hello'
}}>click me</button>