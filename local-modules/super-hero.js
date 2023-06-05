class SuperHero {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

module.exports = new SuperHero("Batman");

//from index.js
// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero");
// console.log(superHero.getName());

//output of final line came as Superman due to cache (since this module was already called, it was cached)
//object passed as reference thats why set property worked as well
//if we doesnt want this behavior, we can simply export as
//module.exports = SuperHero
