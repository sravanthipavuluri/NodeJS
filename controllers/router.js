var express=require('express');
//For Accessing form data need to import
var bodyParser=require('body-parser');

var router=express.Router();

router.get('/',function(req,res){
    res.send("<h2>Hello World from default router</h2>");
})

router.get('/login',function(req,res){   
    res.render('login',{data:""});
})

router.post('/register',function(req,res){
    var user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    console.log("User is:",user);
    res.render("login",{data:user});
})
module.exports=router;