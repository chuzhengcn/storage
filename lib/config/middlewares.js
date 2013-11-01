var path = require('path');

module.exports = function (app, express) {
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('lehoulehou'));
    // app.use(express.session());
    app.use(app.router);
    app.use(require('stylus').middleware(path.join(__dirname, '..', '/public')));
    app.use(express.static(path.join(__dirname, '..', '/public')));
    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }
}