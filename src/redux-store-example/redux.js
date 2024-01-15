import "./patchProcess";
import { createStore } from "redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function svelteStoreEnhancer(createStoreAPI) {
  return function (reducer, initialState) {
    const reduxStore = createStoreAPI(reducer, initialState);

    return {
      ...reduxStore,
      subscribe(fn) {
        fn(reduxStore.getState());

        return reduxStore.subscribe(() => {
          fn(reduxStore.getState());
          console.log("store value modified to: ", reduxStore.getState());
        });
      },
    };
  };
}

export default createStore(reducer, svelteStoreEnhancer);
