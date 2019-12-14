var http = require('http');
var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var api = require('./api/analyze/analyze.route')

var app = express();

console.log('Listening on port 3006')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === 'OPTIONS') return res.send('abc');
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/analyze', api)
// app.use('/', (request, respond, next) => {
//   // console.log(request.params)
//   respond.send(request.query.link)
//   console.log(request.query.link)

// })//require('./api/analyze/analyze.route'))

// accept POST request on the homepage
// app.post('/', (req,res, next)=> {
//   res.send('POST at /');
//   // next.
// })


// accept PUT request at /user
app.put('/user', function (req, res) {  
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {  
  res.send('Got a DELETE request at /user');
});


var port = 3006
app.set('port', port);
var server = http.createServer(app);

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  res.send({code: 999, message: 'API NOT FOUND'})  
});

server.listen(port);
