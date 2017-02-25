"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoute = (function () {
    function IndexRoute(db) {
        this.router = express_1.Router();
        this.db = db;
        this.create(db);
    }
    IndexRoute.prototype.get = function (req, res, next) {
        res.render('index', { title: this.db });
    };
    IndexRoute.prototype.getQuickStart = function (req, res, next) {
        res.render('quickstart');
    };
    IndexRoute.prototype.create = function (db) {
        this.router.get("/", function (req, res, next) {
            new IndexRoute(db).get(req, res, next);
        });
        this.router.get("/quickstart", function (req, res, next) {
            new IndexRoute(db).getQuickStart(req, res, next);
        });
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.js.map