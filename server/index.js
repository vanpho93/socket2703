const io = require('socket.io')(3000);

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('CLIENT_SEND_MESSAGE', text => {
        socket.emit('SERVER_SEND_MESSAGE', 'SERVER DA NHAN DUOC TIN NHAN: ' + text);
    });
});
