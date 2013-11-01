var app_root_url    = '/' + require('../../package').name,
    c_path          = '../controllers/',
    c_root          = require(c_path + 'index.js'),
    upload          = require(c_path + 'upload.js'),
    user            = require(c_path + 'user.js');

module.exports = function (app) {
    var routes = [
        ['get', '', c_root.index],
        ['post', '/upload', upload.index],
        ['get', '/users', user.list],
    ]; 

    routes.forEach(function(item) {
        app[item[0]](app_root_url + item[1], item[2])
    })
}