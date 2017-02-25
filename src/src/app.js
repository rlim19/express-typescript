"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var path_1 = require("path");
var cookieParser = require("cookie-parser"); // this module doesn't use the ES6 default export yet
var index_1 = require("./routes/index");
var App = (function () {
    function App() {
        this.express = express();
        this.config();
        this.middleware();
        this.routes();
    }
    App.prototype.config = function () {
        // view engine setup
        this.express.set('views', path_1.join(__dirname, 'views'));
        this.express.set('view engine', 'jade');
        this.db = 'MongoDB';
    };
    App.prototype.middleware = function () {
        // uncomment after placing your favicon in /public
        //app.use(favicon(__dirname + '/public/favicon.ico'));
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cookieParser());
        this.express.use(express.static(path_1.join(__dirname, 'public')));
    };
    App.prototype.routes = function () {
        var indexRoutes = new index_1.IndexRoute(this.db);
        this.express.use('/', indexRoutes.router);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map