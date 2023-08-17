import { Router, Request, Response } from "express";
import { useTypeORM } from "../database/typeorm";
import { ResumeEntity } from "../database/entity/resume.entity";

const controller = Router();

controller

  .post("/", async (req: Request, res: Response) => {
    const newResume = await useTypeORM(ResumeEntity).save(req.body);
    res.status(201).send(newResume);
  })

  .get("/", async (req: Request, res: Response) => {
    const resumes = await useTypeORM(ResumeEntity).find();
    res.send(resumes);
  })

  .get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Required parameter "id" is missing!' });
    }

    // Validate if id is a valid integer before querying the database
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid parameter "id" provided!' });
    }

    const existingResume = await useTypeORM(ResumeEntity).findOneBy({ id });

    if (!existingResume) {
      return res.status(404).json({ error: `Resume with id: ${id} was not found.` });
    }

    res.json(existingResume);
  })

  .patch("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ message: 'Required parameter "id" is missing!' });
    }

    const existingResume = await useTypeORM(ResumeEntity).findOneBy({ id });

    if (!existingResume) {
      return res.status(404).send({ message: `Resume with id: ${id} was not found.` });
    }

    const changes: Partial<ResumeEntity> = req.body;
    const resumeChanges = { ...existingResume, ...changes };

    const updatedResume = await useTypeORM(ResumeEntity).save(resumeChanges);
    res.send(updatedResume);
  })

  .delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ message: 'Required parameter "id" is missing!' });
    }

    const existingResume = await useTypeORM(ResumeEntity).findOneBy({ id });

    if (!existingResume) {
      return res.status(404).send({ message: `Resume with id: ${id} was not found.` });
    }

    await useTypeORM(ResumeEntity).remove(existingResume);
    res.send({ message: "Resume removed!" });
  });

export default controller;
