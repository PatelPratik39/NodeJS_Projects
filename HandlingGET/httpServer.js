// const http = require('http');
// const dbModule = require('./DBModule');
// url = require('url');
// queryString = require('querystring');


// var server = http.createServer((req, res) => {
//     var path = url.parse(req.url).pathname;
//     var query = url.parse(req.url).query;
//     var name = queryString.parse(query)["username"];
//     var password = queryString.parse(query)["password"];

//     // invoking DBModule method that validates the username and password

//     result = dbModule.authenticateUser(name, password);
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end("<html><body><h1>" + result + "</h1></body></html>");
//     console.log("Your request Recieved");
// });

// server.listen(3000);
// console.log("Server is running");

var http = require("http");
var module = require("./DBModule");
url = require("url");

querystring = require("querystring");

var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  var query = url.parse(request.url).query;
  var username = querystring.parse(query)["username"];
  var password = querystring.parse(query)["password"];

  //invoke dbmodule method to validate the username and password
  result = module.authenticateUser(username, password);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<html><body><h1>" + result + "</h1></body></html>");
  console.log("Request received");
});
server.listen(3000);
console.log("Server running");