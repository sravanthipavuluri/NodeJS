//Simple routing without external router file
// var express=require('express');

// var app=express();
// app.listen(8080);
// app.get('/',function(req,res){
//     res.send("Hello World");
// })

// app.get('/register',function(req,res){
//     res.send("Currently in registration...");
// })
// console.log("hello server is running at port 8080...");

//Using external router concepts and implementing routing
var express=require('express');
var ejs=require('ejs');
var routerFile = require('./controllers/router');
var app=express();

app.use('/user',routerFile);
app.use('/student',routerFile);
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

// app.get('/',function(req,res){
//     res.send("Hello World");
// })

app.get('/register',function(req,res){
    res.render('register');
})

app.listen(8080);
console.log("hello server is running at port 8080...");
