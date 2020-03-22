import { Router } from 'express';

import testController from '../app/controllers/test.controller';

class TestRouter {
  constructor() {
    this.router = Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router
      .route('/test')
      .get(testController.show);
  }
}

export default new TestRouter().router;
