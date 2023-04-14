var halson = require('halson');
 
var embed = halson({
        title: "joyent / node",
        description: "evented I/O for v8 javascript"
    })
    .addLink('self', '/joyent/node')
    .addLink('author', {
        href: '/joyent',
        title: 'Joyent'
    });
 
var resource = halson({
        title: "john doe",
        username: "doe",
        emails: [
            "john.doe@example.com",
            "doe@example.com"
        ]
    })
    .addLink('self', '/doe')
    .addEmbed('starred', embed);
 
console.log(resource.title);
console.log(resource.emails[0]);
console.log(resource.getLink('self'));
console.log(resource.getEmbed('starred'));
console.log(JSON.stringify(resource));