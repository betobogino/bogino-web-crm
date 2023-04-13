import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const router = Router();

router.get('/user', getProjects);
router.post('/user', createProject);
router.put('/user/:id');
router.delete('/user/:id');

export default router;