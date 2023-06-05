process.nextTick(() => {
  console.log("this is process.nextTick 1 ");
});
process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() => {
    console.log("this is inner next tick inside next tick ");
  });
});
process.nextTick(() => {
  console.log("this is process.nextTick 3 ");
});

Promise.resolve().then(() => {
  console.log("this is Promise.resolve 1");
});
Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  process.nextTick(() => {
    console.log("this is inner next tick inside Promise then block ");
  });
});
Promise.resolve().then(() => {
  console.log("this is Promise.resolve 3");
});

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 1 ");
// });
//All callback in nextTick queue are executed before callbacks in promise queue

// console.log("first");
// process.nextTick(() => {
//   console.log("this is process.nextTick 1 ");
// });
// console.log("second");

//All use written sync JS code takes priority over async code that runtime would like to
//eventually execute
