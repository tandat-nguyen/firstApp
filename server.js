
const http = require('http');
const express = require('express');
const fs = require ('fs');

const firstApp = express();

firstApp.get('/', (req,res) =>
  res.send('Hello world')
)

const server = http.createServer(firstApp);

server.listen(process.env.PORT || 1234)
console.log("start server")