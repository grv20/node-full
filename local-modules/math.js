const add = (a, b) => {
  return a + b;
};

// OR
// 1 :module.exports =  add

// 2 module.exports = (a, b) => {
//     return a + b;
//   };

const subtract = (a, b) => {
  return a - b;
};

// 3
module.exports = {
  add: add,
  subtract: subtract,
};
//OR
// 4 module.exports = {
//     add,
//     subtract
//   };

//OR
// 5
// module.exports.add =  (a, b) => {
//     return a + b;
//   };

//   module.exports.subtract = (a, b) => {
//     return a - b;
//   };

//OR
// 6
// exports.add =  (a, b) => {
//     return a + b;
//   };

//   exports.subtract = (a, b) => {
//     return a - b;
//   };

//exports vs module.exports
//have a look at object-reference.js
//if we do module.exports= {add, subtract} it will work since module.exports and export refer to same object
//if we do export.add and export.subtract, it will also work since export is still mainataining its reference to module.exports
//but if we do exports = {add, subtract}, it will only fill exports but not module.exports.. sice reference is broken
// and require always reads from module.exports
