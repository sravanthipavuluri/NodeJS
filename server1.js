var http= require('http');

http.createServer((req,res)=>{
    //console.log("The req data is:",req);
    //console.log("The res data is:",res);
    res.write("Hello World!!!!");
    res.end();
}).listen(8080);

console.log("hello server from digitallync!!!!!");
