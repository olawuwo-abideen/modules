// var restify = require('restify');

// const server = restify.createServer({
//   name: 'myapp',
//   version: '1.0.0'
// });

// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());

// server.get('/echo/:name', function (req, res, next) {
//   res.send(req.params);
//   return next();
// });

// server.listen(8080, function () {
//   console.log('%s listening at %s', server.name, server.url);
// });


var restify = require('restify'); 
 var server = restify.createServer({ 
 name: 'MyApp', 
 }); 


 server.get( '/foo/:id' , function (req, res, next) { 
    next('foo2'); 
    }); 
    server.get({ 
    name: 'foo2', 
    path: '/foo/:id'
    }, function (req, res, next) { 
    res.send(200); 
    next(); 
    });

 server.listen(8080); 