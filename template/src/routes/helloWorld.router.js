import { Router } from 'express';

import helloWorldController from '../app/controllers/helloWorld.controller';

class HelloWorldRouter {
  constructor() {
    this.router = Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router.route('/helloWorld').get(helloWorldController.show);
  }
}

export default new HelloWorldRouter().router;
