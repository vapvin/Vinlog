import express from "express";
import routes from "../routes";
const apiV2Router = express();

apiV2Router.get(routes.apiV2Edit, (req, res) => res.send("API V2 EDIT"));
apiV2Router.get(routes.apiV2Remove, (req, res) => res.send("API V2 REMOVE"));

export default apiV2Router;
