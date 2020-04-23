import { CreateTypeormCon } from "./configs/database.config";
CreateTypeormCon().then( () => {
  console.log("conectado success")
});
import app from "./app";
import "reflect-metadata";
app.set("port", process.env.PORT || 3000);
app.listen(app.get('port'));
console.log(`Listening on http://localhost:${app.get('port')}`);
