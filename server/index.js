const io = require('socket.io')(3000);

const arrUsername = [];

io.on('connection', socket => {
    socket.on('CLIENT_SIGN_IN', username => {
        const isExist = arrUsername.indexOf(username) !== -1;
        if (isExist) return socket.emit('USERNAME_EXIST');
        socket.emit('ACCEPT_USERNAME', username);
        socket.emit('LIST_USER_ONLINE', arrUsername);
        arrUsername.push(username);
        io.emit('NEW_USER_SIGN_IN', username);
    });

    socket.on('CLIENT_SEND_MESSAGE', text => console.log(text));
});
