(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hi");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Hey");

// (function (exports, require, module, __filename, __dirname) {
//   const superHero = "Superman";
//   console.log(superHero);
// })
// This is how actually module gets imported to other module
