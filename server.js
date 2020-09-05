var express = require("express");
const { request } = require("http");
const { response } = require("express");
var app = express();
var server = require('http').Server(app);

app.get('/naeem',(request,response) => {

response.status(200).send("Hello");

}) ;

server.listen(1234);



