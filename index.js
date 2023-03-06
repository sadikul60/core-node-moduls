const {name, product} = require("./other");

// console.log(name, product);


// node.js diye Server create.
const http = require("http"); // http.createServer
const url = require("url"); // url
const fs = require("fs"); // fillSystem


const PORT = 5000;

// multi data
const data = [
    {id: "1", course: "ACC"},
    {id: "2", course: "Node-Mongo"}
]

// create json type data. conditional url with raw node.js
// const server = http.createServer((req, res) => {
//     if(req.url=="/"){
//         res.writeHead(200, {"content-type" : "application/json"}); // json type data
//         res.end(JSON.stringify(data));
//         // res.end()
//     }

//     else if(req.url=="/contact"){
//         res.writeHead(200, {"content-type" : "text/html"}); // html data
//         res.write('<p> This is Contact page </p>');
//         res.end()
//     }

//     else if(req.url=="/aboutUs"){
//         res.writeHead(200, {"content-type" : "text/html"}); // html data
//         res.write('<p> This is About Us page </p>');
//         res.end()
//     };
// });

// console.log(url);

// query of node.js url method
// const server = http.createServer((req, res) => {
//     const address_url = 'http://localhost:5000/contact?name=sadikul&country=bangladesh';
//     const parsed_url = url.parse(address_url, true);
//     const queryObj = parsed_url.query;
//     console.log(queryObj);
// });



const server = http.createServer((req, res) => {
    if(req.url = "/"){
        // fs.readFile("data.txt", (err, data) => {
        //     if(err){
        //         res.write("Faild to Read data")
        //         res.end()
        //     } else{
        //         res.write(data)
        //         res.end()
        //     }
        // })

        // synchronous way
        // const data = fs.readFileSync("data.txt");
        // res.write(data)
        // res.end()

        // asynchronous way
        fs.writeFile("newData.txt", "Hello Node js !!!", (err) =>{
            if(err){
                res.write("Data faild to write!");
                res.end()
            } else{
                res.write("Data written successfully!");
                res.end()
            }
        })
    }   
});



server.listen(PORT);

console.log(`Server is running on ${PORT}`);