var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/login', function(req,res){

    res.sendfile('MyPage.html');
});

app.listen(3000, function(){

    console.log("server is running on 3000")
});