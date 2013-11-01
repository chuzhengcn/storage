var express = require('express'),
    app     = express(),
    http    = require('http');

// settings
require('./config/settings')(app)

// middleware
require('./config/middlewares')(app, express)

// config routes
require('./config/routes')(app)

// db
// var models_path = __dirname + '/lib/models'

// fs.readdirSync(models_path).forEach(function (file) {
//     if (file.indexOf('.js')) {
//         require(models_path + '/' + file)
//     } 
// })

// run
http.createServer(app).listen(app.get('port'), function(){
    console.log('storage server listening on port ' + app.get('port'));
});
