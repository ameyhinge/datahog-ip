var mysql = require('mysql');

function conn(req){

    //Define connection
    var con = mysql.createConnection({
        host:"localhost",
        user:req.name,
        password:req.password
    });
    
    //Connect to Mysql
    con.connect(function(err, result){
        if (err) throw err;
        console.log("Connected");
    })
    return true;
}

module.exports=conn;
