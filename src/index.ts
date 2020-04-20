import express, {Application, Request, Response, NextFunction} from 'express';
import "reflect-metadata";

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello");
});
app.listen(5000, () => console.log("server running"));