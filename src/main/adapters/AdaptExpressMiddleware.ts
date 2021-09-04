import { Request, Response, NextFunction } from 'express';

import { Middleware } from '../../infra/http/contracts/Middleware';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.headers || {}),
      authToken: req.headers.authorization,
    };
    const httpResponse = await middleware.handle(request);
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.data);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.data.message,
      });
    }
  };
};
