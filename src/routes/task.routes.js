import { Router } from "express";
import { getTasks, createTask } from "../controllers/task.controller.js";

const router = Router();

router.get('/task', getProjects);
router.post('/task', createProject);
router.put('/task/:id');
router.delete('/task/:id');
router.get('/task/:id');

export default router;