const http = require('http');//It imports the built-in 'http' module, which provides an HTTP server and client functionality. 
const fs = require('fs');//use the functions and properties provided by te 'fs' module,such as `fs.readFile` and `fs.writeFile`to perform file operation.

const PORT=5000; 
const print = fs.readFile('./index.html',Renderinghtml)//reading the html file
function Renderinghtml (err, html) {

    if(err){
        throw err;
    }else{
        const Server= http.createServer(function(request, response) {  
            response.writeHeader(200,{"Content-Type": "text/html"});//  tatus code "200" is sent, which indicates a successful HTTP response.
            response.write(html);  //write is used for send the data to the client.
            response.end();  //it signal the all the data send to the and no more data will sent in response to current request.
        })
    
        Server.listen(PORT,()=>{ //It is used to start a server and listen for incoming connections
            console.log("http://localhost:5000/")
        });
    }    
   
};