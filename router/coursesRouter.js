import express from "express";
import routes from "../routes";
const coursesRouter = express();

coursesRouter.get(routes.courses, (req, res) => res.send("COURESES"));
coursesRouter.get(routes.coursesMine, (req, res) => res.send("coursesMine"));
coursesRouter.get(routes.coursesNew, (req, res) => res.send("coursesNew"));

export default coursesRouter;
