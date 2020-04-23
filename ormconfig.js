require("dotenv").config();

module.exports = [
  {
    name: "Developert",
    host: process.env.DB_HOST,
    type: "postgres",
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    synchronize: false,
    entities: ["src/database/entity/*.entity{.ts,.js}"],
    migrations: ["src/database/migrations/*{.ts,.js}"],
    cli: {
      migrationsDir: "src/database/migrations",
      entitiesDir: "src/database/entity",
    },
  },
  {
    name: "test",
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "Test",
    password: "123456",
    database: "almacen-test",
    synchronize: true,
    logging: false,
    dropSchema: true,
    entities: ["src/database/entity/*.entity{.ts,.js}"],
    migrations: ["src/database/migrations/*{.ts,.js}"],
    cli: {
      migrationsDir: "src/database/migrations",
      entitiesDir: "src/database/entity",
    },
  },
];
