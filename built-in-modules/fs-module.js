const fs = require("node:fs");

console.log("first");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("second");
fs.readFile("./file.txt", "utf-8", (error, data) => {
  //error first call-back function
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("third");

fs.writeFileSync("./greet.txt", "Hello World");
fs.writeFile("./greet.txt", " Hello Vishwas", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written!");
  }
});

const { error } = require("node:console");
const fs = require("node:fs/promises");

// console.log("first");
// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log("second");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readFile();

//callback api of async readFile is preferred for max performance over above these two approach
