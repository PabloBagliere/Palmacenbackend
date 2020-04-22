import app from "../app";
import rolRouter from "./rol.router";

// Location of all routes

export const Routers = () => {
  app.use("/roles", rolRouter);
};
