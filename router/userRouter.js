import express from "express";
import routes from "../routes";
const userRouter = express();

userRouter.get(routes.login, (req, res) => res.send("login"));
userRouter.get(routes.join, (req, res) => res.send("join"));
userRouter.get(routes.confirmAccount, (req, res) => res.send("confirmAccount"));

export default userRouter;
