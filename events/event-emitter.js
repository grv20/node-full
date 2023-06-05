const EventEmitter = require("node:events");

const emitter = new EventEmitter();
emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size, topping) => {
  if (size === "large") {
    console.log("Serving complimentry drink");
  }
});
console.log("first");
emitter.emit("order-pizza", "large", "mushrooms");
