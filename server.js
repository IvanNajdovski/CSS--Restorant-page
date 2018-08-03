const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '/');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

app.get("/menu",(req,res,next) =>{
    res.sendFile(path.join(__dirname+'/menus.html'));
});
app.get("/blog",(req,res,next) =>{
    res.sendFile(path.join(__dirname+'/blog.html'));
});
app.get("/contact",(req,res,next) =>{
    res.sendFile(path.join(__dirname+'/contact.html'));
});


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

