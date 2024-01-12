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

const subscribers = [];
setInterval(() => {
  subscribers.forEach((subscriber) => {
    subscriber(+new Date());
  });
}, 1000);

export let store3 = {
  subscribe(fn) {
    fn("");
    subscribers.push(fn);
    return () => {
      subscribers.splice(subscribers.indexOf(fn), 1);
    };
  },
  set(value) {
    subscribers.forEach((subscriber) => {
      subscriber(value);
    });
  },
};
