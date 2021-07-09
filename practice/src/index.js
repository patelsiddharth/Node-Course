const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const port =process.env.PORT || 3000

const app = express();
const server = http.createServer(app);
const io =  socketio(server);

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.send('Hello Chat App');
})

let count = 0;
// conection event will fire whenever socket io server gets a new connection
// socket parameter in callback method represent a client
io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    
    // emit is used to send an event to socket client
    socket.emit('CountUpdated', count);

    // on is used to listent for an event
    // 1st parameter is event name and 2nd parameter is the callback which defines what to do when event occured
    socket.on('IncrementCount', ()=>
    {
        count++;
        // used io instead of client(socekt) since we want to update all the clients and not just one.
        io.emit('CountUpdated', count);
    })

    socket.emit('WelcomeMessage', 'Welcome New User :)');

    socket.on('Message', (msg) => {
        io.emit('MessageAlert', msg);
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})