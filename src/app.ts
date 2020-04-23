import express, { Application, Request, Response, NextFunction } from "express";
import rolRauter from "./routes/rol.router";
import cors from "cors";
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.use(express.json());
app.use(cors());

app.use("/roles", rolRauter)

export default app;
