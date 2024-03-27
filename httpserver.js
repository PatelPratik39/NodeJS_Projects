// first Approch
// var module = require('./DBModule');
// var http =  require('http');
// var server = http.createServer(function(req, res) {
//     result = module.authenticateUser("admin","admin");
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.write("<html><body><h1>"+ result + "</h1></body></html>");
//     res.end();
// });

// second Approch using overriding exports
// line 13 and 14 : I have imported modules
var module = require("./DBModule");
var http = require("http");
// line 17: i have create a server using html syntex

var server = http.createServer(function (req, res) {
  result = module("admin", "admin");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html><body><h1>" + result + "</h1></body></html>");
  res.end();
});
console.log("Request Received!");
server.listen(3000);
console.log("Server Started !!! Use Browser");