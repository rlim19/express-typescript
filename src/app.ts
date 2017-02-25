import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import cookieParser = require('cookie-parser'); // this module doesn't use the ES6 default export yet

import { IndexRoute } from './routes/index';

class App {
  public express: express.Application;
  public db: any;

  constructor() {
    this.express = express();
    this.config();
    this.middleware();
    this.routes();
  }

  private config(): void {
    // view engine setup
    this.express.set('views', join(__dirname, 'views'));
    this.express.set('view engine', 'jade');
    this.db = 'MongoDB';
  }

  private middleware(): void {
    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(express.static(join(__dirname, 'public')));
  }

  private routes(): void {
    const indexRoutes = new IndexRoute(this.db);
    this.express.use('/', indexRoutes.router);
  }
}

export default new App().express;