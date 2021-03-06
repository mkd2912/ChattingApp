const express=require('express');
const res = require('express/lib/response');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8917;



const path = require('path')
app.use(express.static(path.join(__dirname + '/public')));

/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});*/

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Server running at ${port}`);
});