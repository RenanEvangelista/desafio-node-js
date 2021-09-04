module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [`${__dirname}/{dist,src}/infra/db/typeorm/entities/*.{ts,js}`],
  migrations: [`./{dist,src}/infra/db/typeorm/migrations/*.{ts,js}`],
  cli: {
    migrationsDir: './src/infra/db/typeorm/migrations',
  },
};
