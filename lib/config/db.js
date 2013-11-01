var mongoose = require('mongoose'),
    db       = null,
    url      = '192.168.1.177:27017/test';

mongoose.connect(url);

db = mongoose.connection;

db.on('open', function() {
    console.log('mongodb connections success')
});

db.on('error', function() {
    console.log('mongodb connections failure')
});

exports.mongo = mongoose;

