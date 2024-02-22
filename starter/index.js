//All packages
const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////
// FILE MODULE
/*basics
//write hello world
// const hello = "Hello World";
// console.log(hello);
//here we call the fs module using require function of nodejs
//fs is an object contains lots of method we will access for our functionality
const fs = require("fs");


//synchronus blocking way
//read file data
const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputText);

const textOutput = `This is what we know about the avocado: ${inputText}.\nCreated on  ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File written");

//////////async and synch behaviour of nodejs
//we use callback extensively
//callback doesnot make asynchornous automatically
//problem in callback asynchronus way is callback hell

//Reading and writting files in asynchronus nonblocking way
const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("Will read file");

//multiple actions
const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
  fs.readFile("./txt/read-this.txt", "utf-8", (err, data) => {
    console.log(data);
  });
  console.log(data);
});

//multiple callbacks
const fs = require("fs");
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR!");
  console.log(data1);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    // console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
          console.log("Your file has been written");
      });
    });
});
});
console.log("will read file");

//just practice
// const fs = require("fs");
// const data = fs.readFileSync("./txt/append.txt", "utf-8");
// console.log(data);
// fs.writeFileSync("./txt/farzi.txt", data);
// console.log("hello");

const fs = require("fs");
fs.readFile("./txt/farzi.txt", "utf-8", (err, data) => {
    console.log(data);
  fs.writeFile("./txt/farzi.txt", data, (err) => {
    console.log("hi");
  });
});
console.log("hi");
/////////////////////////////
/// SERVER
//FIRST WEB SERVER WEBAPP

const server = http.createServer((reques, response) => {
  console.log(response);
  response.end("Hello from the server");
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to request on port 8000");
});

//ROUTING
//it means implementing different actions for different url
const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
      res.end("this is overview");
    } else if (pathName === "/product") {
        res.end("this is our product");
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello world",
        });
        res.end("<h2>Page Not Found!</h2>");
    }
});

server.listen("8000", "127.0.0.1", () => {
    console.log("listening to request on port 8000");
});

//this is what routing is-where we want to get response for homepage,for /overview ,/product url and much more........

///////////////
//API-a service from which we can request some data

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
      res.end("this is overview");
    } else if (pathName === "/product") {
        res.end("this is our product");
    } else if (pathName === "/api") {
        fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, {
        "Content-type": "application/json",
    });
    console.log(productData);
    res.end(data);
});
} else {
    res.writeHead(404, {
        "Content-type": "text/html",
        "my-own-header": "hello world",
    });
    res.end("<h2>Page Not Found!</h2>");
}
});

server.listen("8000", "127.0.0.1", () => {
    console.log("listening to request on port 8000");
});


//same thing in different way
//listen bro one thing code inside of createserver callback execute evrytime u hit the sever or say url in browser but reading json evrytime make code slower
//so we logic it outside of that and now made in synchronus so it will only read once
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
console.log(dataObj);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this is our product");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h2>Page Not Found!</h2>");
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});

*/
//////////////
//building node farm website
//app.js

//Buidling our own modules
//

///////////
//nodepackagemanager[npm]
//command line interface app that automatically comes included nodejs and retrieve to use and manage open sources app
//npm

///type of package and installation
//1.simple depencies and
//2.developement depencies

//1.simple or regular package depencies are basically nothing but npm basic approach towards
//2.development dependencies are
