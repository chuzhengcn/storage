var path = require('path');

module.exports = function (app) {
    app.set('port', process.env.PORT || 3001);
    app.set('views', path.join(__dirname, '..', '/views'));
    app.set('view engine', 'jade');
}