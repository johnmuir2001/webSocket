const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const publicDir = path.join(__dirname, './public');

const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.use(express.static(publicDir));

io.on('connection', (socket) => {
    socket.on('inputMessage', (text) => {
        io.emit("message", text)
    })
    
    console.log('New WebSocket Connection')
    socket.emit('message', "Welcome")
})


server.listen(3001, () => {
    console.log("server is running on port 3001")
})