// importando modulos
import { Router } from "express";
const router = Router();

import { login } from "../controllers/auth.controller.js";

router.post("/:id", login);

export default router;