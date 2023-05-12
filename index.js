// index.js
// where your node app starts

// init project
var express = require('express');
var app = express({ port:6969 });

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:date?', function (req, res) {
  let raw = req.params.date
  let date = +raw ? new Date(+raw) : new Date(raw)
  if (date)
  res.json({ utc: date.toUTCString(), unix: +date })
  else
  res.json({ error: "Invalid Date"})
})


// listen for requests :)
var listener = app.listen('6969', function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
