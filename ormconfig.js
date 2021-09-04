module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/{dist,src}/infra/db/typeorm/entities/*.{ts,js}`],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  migrations: [`./{dist,src}/infra/db/typeorm/migrations/*.{ts,js}`],
  cli: {
    migrationsDir: './src/infra/db/typeorm/migrations',
  },
};
