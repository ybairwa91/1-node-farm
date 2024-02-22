const fs = require("fs");
const http = require("http");
const path = require("path");
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

*/
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    console.log(cardsHtml);

    res.end(output);
  }
  // Product page
  else if (pathName === "/product") {
    res.end("this is our product");
  }
  // API
  else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  }
  //NOT FOUND
  else {
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
