const {name, product} = require("./other");

console.log(name, product);


// node.js diye Server create.
const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200, {"content-type" : "text/html"});
        res.write('<p> This is Home page </p>');
        res.end()
    }

    else if(req.url=="/contact"){
        res.writeHead(200, {"content-type" : "text/html"});
        res.write('<p> This is Contact page </p>');
        res.end()
    }

    else if(req.url=="/aboutUs"){
        res.writeHead(200, {"content-type" : "text/html"});
        res.write('<p> This is About Us page </p>');
        res.end()
    };
});

server.listen(PORT);

console.log(`Server is running on ${PORT}`);