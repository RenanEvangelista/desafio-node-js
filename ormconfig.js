module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/dist/infra/db/typeorm/entities/*.{ts,js}`],
  migrations: ['./dist/infra/db/typeorm/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: './src/infra/db/typeorm/migrations',
  },
};
