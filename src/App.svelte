<script>
	import { setContext, onMount } from 'svelte';

	import store from './redux-store-example/redux';
	import mousePosition from './dom-event-store-example/mousePosition';

	import Parent from './context-example/Parent.svelte';
	import Parent2 from './context-example/Parent2.svelte';
	import Profile from './profile-example/Profile.svelte';
	import Parent3 from './context-communicatio-example/Parent3.svelte';
	import Input from './store-example/Input.svelte';
	import Output from './store-example/Output.svelte';

	function onSkillPointChanged(event){
		console.log('skillPointsChanged:', event.detail)
	}

	let color = 'red';
	let count = 0;

	setContext('color', color);
	setContext('click', onClick);

	function onClick() {
		count ++;
	}


	//Redux State Example
	// let state = store.getState();
	// store.subscribe(() => {
	// 	state = store.getState();
	// })

	function decrement() {
		store.dispatch({ type: 'DECREMENT' });
	}
	function increment() {
		store.dispatch({ type: 'INCREMENT' });
	}

	//DOM Event Store Example
	


</script>

<div>
	Profile Example
	---------------

</div>
<Profile name='Moey' status='Coding vigorously' on:skillPointChanged={onSkillPointChanged}/>
<Profile />

<div>
	______________
	Context Example
	--------------
</div>
<Parent/>
<Parent2 />

<div>
	________________
	Context Example 2
	----------------
</div>

<input type="color" bind:value={color} />
{color}
<Parent3 on:click={onClick}/>
<div>
	Count: {count}
</div>

<div>
	________________
	Store Example
	----------------
</div>
<Input/>
<Output/>


<div>
	________________
	Redux Store Example
	----------------
</div>
<button on:click={decrement}>-</button>
{$store}
<button on:click={increment}>+</button>


<div>
	__________________
	DOM Event Store Example
	------------------
</div>
<h2>Mouse Position: {$mousePosition.x}, {$mousePosition.y}</h2>


<style>
	div {white-space: pre-line;}
</style>