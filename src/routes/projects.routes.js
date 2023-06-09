import { Router } from "express";
import { getProjects, createProject, getProject, updateProject, deleteProject } from "../controllers/project.controller.js";

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);

export default router;