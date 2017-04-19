const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const twitter = require('./twitter.js');

twitter.getAuthorization();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function (req, res) {
  twitter.getList()
  .then(response => {
    res.json(response);
  });
});

app.get('/search/:term', function (req, res) {
  twitter.getResults(req.params.term)
  .then(response => {
    res.json(response);
  });
});

io.on('connection', function (socket) {
  // socket.emit('server event', { connection: 'OK' });
  // socket.on('client event', function (data) {
  //   console.log(data);
  // });
  // socket.on('disconnect', function(){
  //   console.log( socket.name + ' has disconnected ' + socket.id);
  // });
});

setInterval(()=>{
  if(io.engine.clientsCount){
    twitter.getList()
    .then(response => {
      io.sockets.emit('update', response);
    });
  }
}, 30000);

server.listen(8080);
