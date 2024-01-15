<script>
	import { setContext, onMount } from 'svelte';
	import { writable, derived } from 'svelte/store';

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

	//Derived Store Example
	const num = writable(10);
	const num2 = writable(42);

	// derived from 1 store, syncronously 
	const doubleOfNum = derived(num, ($num) => {
		return $num * 2
	})
	// derived from 2 stores, syncronously
	const multiplication = derived([num, num2], ([$num, $num2]) => {
		return $num * $num2
	})

	// get the derived value asyncronously
	const delayedNum = derived(num, ($num, set) => {
		// setup/initialization of the function
		let timeoutId = setTimeout(() => {
			set($num)
		}, 1000);

		// cleanup function
		return () => {
			clearTimeout(timeoutId);
		}
	}, 'not set') // <= default value = 'not set'  

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


<div>
	__________________
	Derived Store Example
	__________________
</div>
<input bind:value={$num} type="number"/>
<input bind:value={$num2} type="number"/>
<div>
	{$num} * 2 = {$doubleOfNum}
</div>
<div>
	{$num} * {$num2} = {$multiplication} 
</div>
<div>
	delayedNum: {$delayedNum}
</div>

<style>
	div {white-space: pre-line;}
</style>