var express= require('express');
var path = require('path');
var bodyParser = require('body-parser');


var loginsql = require('./login-sql');
//Stored instance of express.Router class in router variable 
var router=express.Router()

//Redirecting to login url
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',function(req,res){
    res.send("the page");
})
router.post('/login',function(req,res){
    //call the login-sql module
    res.send(loginsql(req.body));
});
router.get('/signup',function(req,res){
    res.send("This is the Sign up Page")
});

//Exporting the router instance
module.exports=router;