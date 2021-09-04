import express from 'express';
import cors from 'cors';
import { bodyParserMiddleware } from '../middlewares/bodyParserErrorMiddleware';

import { setupRoutes } from './routes';
import { setupSwagger } from './swagger';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParserMiddleware);
setupRoutes(app);
setupSwagger(app);

export { app };
