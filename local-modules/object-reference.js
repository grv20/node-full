const obj1 = {
  name: "Bruce Wayne",
};

let obj2 = obj1;
obj2.name = "Clark Kent"; //if we do this obj1 will also get changed
//obj2 = { name: "Clark Kent" }; // and if we do this obj1 wont get changed

console.log(obj1);
