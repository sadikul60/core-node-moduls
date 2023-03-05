const {name, product} = require("./other");

console.log(name, product);


// node.js diye Server create.
const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.end("Hello Programmer");
});

server.listen(PORT);

console.log(`Server is running on ${PORT}`);