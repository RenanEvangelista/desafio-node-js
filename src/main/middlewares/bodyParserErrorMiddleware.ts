import { Request, Response, NextFunction } from 'express';

export const bodyParserMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({ error: 'invalid json' });
  }

  return next();
};
