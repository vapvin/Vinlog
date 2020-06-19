import express from "express";
import routes from "../routes";
const mainRouter = express();

mainRouter.get(routes.main, (req, res) => res.send("main"));
mainRouter.get(routes.apiDocumentation, (req, res) => {
  res.send("apiDocumentation");
});

export default mainRouter;
