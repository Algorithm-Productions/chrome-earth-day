// import express and initilize server
var express = require('express') 
var app = express()
const fs = require('fs');
var http = require('http')

var server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
// app.use(express.static(__dirname + '/node_modules/pixi.js/dist/browser'));
// app.use(express.static(__dirname + '/node_modules/pixi-svg/dist'));
// app.use(express.static(__dirname + '/node_modules/pixi-dashed-line/dist'));

//var io = require('socket.io')(server, {pingInterval: 5000, pingTimeout: 10000}) // pinginterval handles reporting latency per client
var PORT = process.env.PORT || 3000

//Mount route
app.get(['/', '/index.html'], function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("store", (data) => {
        fs.appendFile('data.txt', '\n name: '+data[0]+'\n email: '+data[1]+ '\n company name: '+data[2]+ '\n', function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
      });
  });

  
// fs.appendFile('message.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//start web server
server.listen(PORT, function() {
    console.log('Server starting on port :'+PORT)
})



