require('dotenv').config();

module.exports = {
    host: process.env.DB_HOST,
    type: 'postgres',
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
      'src/database/entity/*.entity{.ts,.js}',
    ],
    migrations: [
      'src/database/migrations/*{.ts,.js}',
    ],
    cli: {
      migrationsDir: 'src/database/migrations',
      entitiesDir: "src/database/entity"
    },
    synchronize: false,
  };