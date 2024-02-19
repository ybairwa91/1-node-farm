//write hello world
// const hello = "Hello World";
// console.log(hello);
//here we call the fs module using require function of nodejs
//fs is an object contains lots of method we will access for our functionality
const fs = require("fs");

//read file data
const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputText);

const textOutput = `This is what we know about the avocado: ${inputText}.\nCreated on  ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written");

//////////async and synch behaviour of nodejs
