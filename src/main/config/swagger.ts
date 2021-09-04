import { serve, setup } from 'swagger-ui-express';
import { Express } from 'express';
import swaggerConfig from '../docs';

export const setupSwagger = (app: Express): void => {
  app.use('/docs', serve, setup(swaggerConfig));
};
