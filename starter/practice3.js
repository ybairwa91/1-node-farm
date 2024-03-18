
////file system



////learn nodejs
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end('hello this is calling server')

})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the port 8000');
})
