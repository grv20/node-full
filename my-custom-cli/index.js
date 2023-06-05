#!/home/gaurav/.nvm/versions/node/v18.16.0/bin/node
//we can find the interpreter path by console.log(process.argv)

// const yargs = require("yargs");
// const { argv } = yargs(process.argv);
// console.log(argv);

const inquirer = require("inquirer");

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

// printFiveMoves("charmander");
// printFiveMoves(argv.pokemon);

// console.log("grv pokedex");

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves",
  },
]).then((answer) => {
  const pokemon = answer.pokemon;
  printFiveMoves(pokemon);
});
