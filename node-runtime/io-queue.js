const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is read file 1");
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"));
for (i = 0; i < 2000000000; i++) {}

//io queue callbacks are executed after microtask queues callbacks and timer queue callbacks

// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"));
// fs.readFile(__filename, () => {
//   console.log("this is read file 1");
// });
//when running setTimeout with delay 0ms and an I/O async method,
//the order of execution can never be guaranteed
//when you set 0ms delay at start of event loop, nodejs need to figure out
//that 1ms timer has been lapsed or not
//if event loop enters the timer at 0.05 ms, the 1ms callbacks hasnt been queued,
//and control moves on to read file callback

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is read file 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is promise.resolve 1"));

//callbacks in microtask queues re executed before callbacks in I/O queue
