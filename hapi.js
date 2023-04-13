// const hapi = require('@hapi/hapi'); 
// //  var server = new hapi.Server() 
//  const server = hapi.server({ load: { sampleInterval: 1000 } });
//  server.connection({ port: 3000 }) 
//  server.start(function() { 
//  console.log("Server running at: ", server.info.url) 
//  }) 

'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

