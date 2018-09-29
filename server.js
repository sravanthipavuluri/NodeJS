var express=require('express');
var bodyParser=require('body-parser');
var ejs=require('ejs');
var routerFile = require('./controllers/router');
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',routerFile);
//app.use('/student',routerFile);

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.get('/register',function(req,res){
    res.render('register');
})

app.listen(8080);
console.log("hello server is running at port 8080...");
