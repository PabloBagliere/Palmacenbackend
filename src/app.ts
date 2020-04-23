import express, { Application, Request, Response, NextFunction } from "express";
import rolRauter from "./routes/rol.router";
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.use(express.json());

app.use("/roles", rolRauter)

export default app;
