const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

/*
/////
//FILE MODULE
//read file synchronously
const output = fs.readFileSync('./txt/farzi.txt', 'utf-8');
console.log(output);

const append = fs.readFileSync('./txt/append.txt', 'utf-8');
console.log(append);

const final = fs.readFileSync(`${__dirname}/txt/final.txt`, 'utf-8');
console.log(final);

//write file synchronously

const inputInfile = 'hello brother';
fs.writeFileSync(`${__dirname}/txt/farzi.txt`, inputInfile);

///////////////////both events synchronously
fs.readFile('./txt/append.txt', 'utf-8', (error, data) => {
    console.log(data);
});

fs.readFile('./txt/farzi.txt', 'utf-8', (err, data) => {
    console.log(data);
});

fs.readFile(`${__dirname}/txt/fial.txt`, 'utf-8', (error, data) => {
  //   if (error) return 'ERROR';
  console.log(error);
});

/////////////////////
//SERVER

const server = http.createServer((req, res) => {
  res.end('delhi se hoon bc');
});
server.listen(8000, '127.0.0.1', () => {
  console.log('listening to the port on 8000');
});

const server = http.createServer((req, res) => {
    res.end('ye wala 9000 port pe h');
});

server.listen(9000, '127.0.0.1', () => {
    console.log('hello');
});


const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html',
  });
  res.end('<h1>Hello</h1>');
});
server.listen(8000, '127.0.0.1', () => {
  console.log('hello brother');
});



const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html',
});
  res.end('<h1>baap baap hota hai</h1>');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('heloo bkl');
});

const server = http.createServer((req, res) => {
    res.writeHead(200, {
    'content-type': 'text/html',
  });
  res.end(
    '<p>What is Node.js? Node.js is an open source server environment Node.js is free Node.js runs on various platforms Windows, Linux, Unix, Mac OS X, etc. Node.js uses JavaScript on the server</p>'
  );
});
server.listen(8000, '127.0.0.1', () => {});

const dt = require('./myfirstmodule');
http
.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('hello world');
})
.listen(8080, () => {
    console.log('hello');
  });

  
  http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('hi guys');
    console.log(url.parse(req.url, true).path);
    res.end();
  })
  .listen(9000);



  
  ///////////////////////////
/////FILE SYSTEM
const server = http
.createServer((req, res) => {
    fs.readFile('./demofile.html', 'utf-8', (err, data) => {
        res.writeHead(200, {
        'content-type': 'text/html',
      });
      res.write(data);
      return res.end();
    });
})
.listen(9000);


fs.appendFile('merinewfile.txt', 'likh de bro kuch bhi', (err) => {
    console.log('saved');
});

fs.open('mynewfile2.txt', 'w', (err) => {
    console.log(err);
});

fs.writeFile('mynewfile3.txt', 'bhai isme bi daldo', (err) => {});

///we have learnt about
//file module and server module

/////////////////////////////////////////////////
//url system ,its module and yes some of the important methods
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//split a web address
const q = url.parse(adr, true);
console.log(q);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
console.log(q.query.month);
console.log(q.query.year);
*/

http
  .createServer((req, res) => {
    console.log(req.url);
    const q = url.parse(req.url, true);
    const pathname = q.pathname;
    const query = q.query;
    console.log(pathname, query);

    if (pathname == '/winter') {
      fs.readFile('./winter.html', 'utf-8', (err, data) => {
        res.writeHead(200, {
          'content-type': 'text/html',
        });
        res.end(data);
      });
    } else if (pathname == '/summer') {
      fs.readFile('./summer.html', 'utf-8', (err, data) => {
        res.writeHead(200, {
          'content-type': 'text/html',
        });
        res.end(data);
      });
    } else {
      res.end('hi');
    }
  })
  .listen(8000);
