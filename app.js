var express = require('express');

var app = express();

app.get("/",(req,res,next)=>{
   res.status(200).send({
       message:"ok"
   });

});

app.listen(3000, (err, res) => {
    if (err) throw err;
    console.log("Servidor http 3000: \x1b[34m%s\x1b[0m"," online");

});
