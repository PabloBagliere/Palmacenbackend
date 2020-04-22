import { createConnection } from "typeorm";
createConnection();
import app from "./app";
import { Routers } from "./routes/index.router";
Routers();
import "reflect-metadata";

app.listen(app.get('port'));
console.log(`Listening on http://localhost:${app.get('port')}`);
