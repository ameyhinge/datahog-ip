var express=require('express');
var path = require('path');
var bodyParser=require('body-parser');
var userdb = require('./userdb-router');

var app=express();

app.use(express.static(path.join(__dirname, '/../dist')));

//Load main page
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist'));
})

//For database queries
app.use('/idapi',userdb);

app.use(express.static(__dirname));

app.listen(3000,function(){
    console.log("App listening on port: 3000");
});

