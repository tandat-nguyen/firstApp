
const http = require('http');
const express = require('express');
const fs = require ('fs');
const Database = require('../database/database');

Database.init();
const firstApp = express();

firstApp.get('/:id?', (req,res) =>{
  console.log(req.params);
  const index = fs.readFileSync('client/index.html');
  res.send(index.toString());
}
)

const server = http.createServer(firstApp);

server.listen(process.env.PORT || 3000)
console.log("start server")