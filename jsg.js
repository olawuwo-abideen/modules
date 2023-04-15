var createSchema = require('json-gate').createSchema; 
 var schema = createSchema({ 
 type: 'object', 
 properties: { 
 title: { 
 type: 'string', 
 minLength: 1, 
 maxLength: 64, 
 required: true 
 }, 
 copies: { 
 type: 'integer', 
 maximum: 20, 
 default: 1 
 }, 
 isbn: { 
 type: 'integer', 
 required: true 
 } 
}, 
additionalProperties: false 
}); 
var invalidInput = { 
title: "This is a valid long title for a book, it might not be the best choice!", 
copies: "3" 
} 
try { 
schema.validate(invalidInput); 
} catch(err) { 
return console.log(err) 
} 