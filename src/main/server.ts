import { app, env } from './config';

app.listen(env.port, () =>
  console.log(`Server running at: http://localhost:${env.port}`),
);
