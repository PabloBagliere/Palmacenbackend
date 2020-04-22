import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.use(express.json());

app.set("port", process.env.PORT || 3000);

export default app;
