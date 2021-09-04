module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/src/infra/db/typeorm/entities/*.ts`],
  migrations: ['./src/infra/db/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infra/db/typeorm/migrations',
  },
};
