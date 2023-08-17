import { Express, Request, Response } from "express";
import resumeRoute from "../controllers/resume.controller";

const routerSetup = (app: Express) =>
  app

    .get("/", async (req: Request, res: Response) => {
      res.send("Hello Nexus Resume Website Builder!");
    })
    .use("/api/resume", resumeRoute);

export default routerSetup;
