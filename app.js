var express = require('express');
var bodyParser  = require('body-parser');
var exphbs  = require('express-handlebars');

var app = express();
var path = require('path');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var videos = require('./videos');
var uploadSgn = require('./signature');
var uploadPg = require('./upload');
var processVideo = require('./process-video');
var reqVideo = require('./video');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
     res.render('home');
});
app.use('/upload',uploadPg);   
app.use('/play',reqVideo);
app.use('/api/videos',videos);
app.use('/api/signature',uploadSgn);
app.use('/api/process',processVideo);
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(8484);