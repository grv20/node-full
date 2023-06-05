setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
//when running setTimeout with delay 0ms and setImmediate method,
//the order of execution can never be guaranteed

// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() =>
//     console.log("this is inner process.nextTick inside setImmediate")
//   );
//   Promise.resolve().then(() =>
//     console.log("this is inner promise.resolve inside setImmediate")
//   );
// });
// setImmediate(() => console.log("this is setImmediate 3"));

//microtask queues callbacks are executed in between check queue callbacks

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is read file 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() =>
//     console.log("this is inner process.nextTick inside readFile")
//   );
//   Promise.resolve().then(() =>
//     console.log("this is inner promise.resolve inside readFile")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"));

// for (i = 0; i < 2000000000; i++) {}

//io events are polled and callback functions are added to io queue
//only after io is complete

//check queue callbacks are executed after microtsak queues callbacks,
//timer queue callbacks and i/o queue callbacks are executed

//microtask queues callbacks are executed after i/o callbacks and before
//chcek queue callbacks
