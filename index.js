const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected',socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected',socket.id);
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000!');
});