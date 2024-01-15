import { readable } from "svelte/store";
// const domStore = {
//   subscribe(fn) {
//     fn({ x: 0, y: 0 });

//     function move(event) {
//       fn({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     }

//     document.body.addEventListener("mousemove", move);

//     return () => {
//       document.body.removeEventListener("mousemove", move);
//     };
//   },
// };

// export default domStore;

export default readable({ x: 0, y: 0 }, (set) => {
  document.body.addEventListener("mousemove", move);

  function move(event) {
    set({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return () => {
    document.body.removeEventListener("mousemove", move);
  };
});
