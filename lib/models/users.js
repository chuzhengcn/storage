var mongo = require('../config/db').mongo;

mongo.once('open', function () {
    console.log('one') 
})