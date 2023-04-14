// var clients = require('restify-clients');
// var assert = require('assert');

// // Creates a JSON client
// var client = clients.createJsonClient({
//   url: 'https://us-east-1.api.joyent.com'
// });


// client.basicAuth('$login', '$password');
// client.get('/my/machines', function(err, req, res, obj) {
//   assert.ifError(err);

//   console.log(JSON.stringify(obj, null, 2));
// });

var assert = require('assert');
var clients = require('restify-clients');

var client = clients.createJsonClient({
  url: 'http://localhost:8080',
  version: '~1.0'
});

client.get('/echo/mark', function (err, req, res, obj) {
  assert.ifError(err);
  console.log('Server returned: %j', obj);
});