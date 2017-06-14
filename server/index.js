const io = require('socket.io')(3000);

io.on('connection', socket => {
    socket.on('SEND_MESSAGE', text => console.log(text));
});
