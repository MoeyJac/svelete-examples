import { writable, readable } from "svelte/store";

export let store1 = readable(0, (set) => {
  let i = 0;
  let timeoutId = setInterval(() => {
    set(++i);
  }, 1000);

  return function () {
    clearInterval(timeoutId);
  };
});

export let store2 = writable("");
