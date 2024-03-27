const greeting = require('./greeting'); //we need to import greething module
const http = require('http');  //we need to import 'http' module to create a server

// create a Server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');  //set the response header to indicate JSON content
    const greetMessage = greeting.getGreetingMessage(); //call the greetMessage from greeting module
    res.end(JSON.stringify({ message: greetMessage }));
}) 

// define a Port at number
const PORT = 3000

// starying a server and listen at PORT
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})