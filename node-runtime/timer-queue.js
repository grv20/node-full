setTimeout(() => console.log("this is setTimeOut 1"), 1000);
setTimeout(() => console.log("this is setTimeOut 2"), 500);
setTimeout(() => console.log("this is setTimeOut 3"), 0);

// setTimeout(() => console.log("this is setTimeOut 1 immediate"), 0);
// setTimeout(() => {
//   console.log("this is setTimeOut 2 immediate");
//   process.nextTick(() => {
//     console.log("this is inner next tick inside setTimeout ");
//   });
// }, 0);
// setTimeout(() => console.log("this is setTimeOut 3 immediate"), 0);

// process.nextTick(() => {
//   console.log("this is process.nextTick 1 ");
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is inner next tick inside next tick ");
//   });
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 3 ");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("this is inner next tick inside Promise then block ");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 3");
// });

//callbacks in microtask queues are executed before callbacks in timer queue
//callbacks in microtask queues are executed in between the execution of callbacks in timer queue
//after every callback execution in timer queue, event loop goes back and checks the microtask queue
//however inside microtask queue, nextTick is given priority,but when control is with promis queue it wont go back to nextTick untill promise queue is done

//Timer queue callbacks are executed in FIFO
