import { Router, Request, Response } from 'express';

export class IndexRoute {
  router: Router;
  db: any;

  constructor(db) {
    this.router = Router();
    this.db = db;
    this.create(db);
  }

  public get(req: Request, res: Response, next?: Function) {
    res.render('index', { title: this.db });
  }

  public getQuickStart(req: Request, res: Response, next?: Function) {
    res.render('quickstart');
  }

  public create(db) {
    this.router.get("/", (req: Request, res: Response, next?: Function) => {
      new IndexRoute(db).get(req, res, next);
    });

    this.router.get("/quickstart", (req: Request, res: Response, next?: Function) => {
      new IndexRoute(db).getQuickStart(req, res, next);
    });
  }

}
