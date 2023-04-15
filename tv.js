var validator = require("tv4") 
 var schema ={ 
 "title": "Example Schema", 
 "type": "object", 
 "properties": { 
 "firstName": { 
 "type": "string" 
 }, 
 "lastName": { 
 "type": "string" 
 }, 
 "age": { 
 "description": "Age in years", 
 "type": "integer", 
 "minimum": 0 
 } 
 }, 
 "required": ["firstName", "lastName"] 
 } 
 var invalidInput = { 
 firstName: 42, 
 age: "100" 
 } 
 var results = validator.validateMultiple(invalidInput, schema) 
 console.log(results) 