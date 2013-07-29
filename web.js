var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
  /*res.send('hello world');*/
  var fs = require('fs');
  var k = fs.readFileSync('./index.html','utf8');
res.send( k );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
