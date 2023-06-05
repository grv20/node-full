function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Vishwas";
  callback(name);
}
higherOrderFunction(greet);
