import express from 'express';

import { setupRoutes } from './routes';

const app = express();

app.use(express.json());
setupRoutes(app);

export { app };
