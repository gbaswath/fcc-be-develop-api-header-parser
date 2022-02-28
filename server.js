// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

//Who AM I Router
app.get("/api/whoami", function (req, res) {
  console.log("Invoking Who AM I??");
  //Requested IP
  let reqIP = req.ip;
  console.log("Requested IP " + reqIP);
  //Request Header
  console.log("Requested Header " + JSON.stringify(req.headers));
  //Request Language
  var reqLang = req.headers["accept-language"];
  console.log("Requested Language " + reqLang);
  //Request Agent
  var reqSoftware = req.headers["user-agent"];
  console.log("Requested Software " + reqSoftware);
  //Expected Response Data
  var responseData = { "ipaddress": reqIP, "language": reqLang, "software": reqSoftware };
  console.log("Prepared Response " + JSON.stringify(responseData));
  res.json(responseData);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});