import express from "express";
import routes from "../routes";

const apiV1Router = express();

apiV1Router.get(routes.apiV1Buy, (req, res) => res.send("API V1 BUY"));
apiV1Router.get(routes.apiV1Refund, (req, res) => res.send("API V1 ReFund"));

export default apiV1Router;
