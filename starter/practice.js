const fs = require("fs");
const http = require("http");
/*
/////////////////////////////
////FILE MODULE
//read file synchronously
const output = fs.readFileSync("./txt/farzi.txt", "utf-8");
console.log(output);

//Write file synchronously
const inputInfile = "hello my name is anthony gonservice";
fs.writeFileSync("./txt/farzi.txt", inputInfile);
console.log(output);

//Asynchronously
//read file
const outputAsync = fs.readFile("./txt/farzi.txt", "utf-8", (err, data) => {
    console.log(data);
    console.log("hi in async");
});
console.log("hi");
//write anything in file
const textOutputAsyn = "hello this is anthony gonservice in async way";
fs.writeFile("./txt/farzi.txt", textOutputAsyn, (err) => {
    if (err) return ERROR;
});


//do callback hell
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
    console.log(data);
    console.log("hi-1");
    fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data) => {
        console.log(data);
        console.log("hi-2");
        fs.readFile(`./txt/farzi.txt`, "utf-8", (err, data) => {
            console.log(data);
      console.log("hi-3");
    });
});
});
console.log("hi-4");



//////////////////////////////
//SERVER
const server = http.createServer((req, res) => {
    console.log(res);
    res.end("hey brother");
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening the port on 8000");
});
//Routing
const server = http.createServer((req, res) => {
    const pathName = req.url;
  if (pathName == "/overview") {
    res.end("hey this is our overview");
} else if (pathName == "/product") {
    res.end("hey this is our product");
} else {
    res.end("this is default page");
}
});
server.listen("8000", "127.0.0.1", () => {
    console.log("listening to the port");
});


//writehead
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == "/overview") {
      res.end("hey this is our overview");
    } else if (pathName == "/product") {
    res.end("hey this is our product");
} else {
    res.writeHead(404, {
        "Content-type": "text/html",
        "my-own-header": "hello world",
    });
    res.end("<h1>Page Not Found</h1>");
}
});
server.listen("8000", "127.0.0.1", () => {
    console.log("listening to the port");
});

//lets use an api and fetch some data bro

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == "/overview" || pathName == "/") {
    res.end("hey this is our overview");
  } else if (pathName == "/product") {
    res.end("hey this is our product");
  } else if (pathName == "/api") {
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
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("listening to the port");
});
 */

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
console.log(dataObj);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName == "/" || pathName == "/overview") {
    res.end("this is overview");
  } else if (pathName == "/product") {
    res.end("this is product");
  } else if (pathName == "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("<h1>Page Not found</h1>");
  }
});

server.listen("8000", "127.0.0.1", () => {});
