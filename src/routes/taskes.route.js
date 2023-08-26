// importando o express e a função Router
import { Router } from "express";
const router = Router();

// importando modulos
import { createTaskes } from "../controllers/taskes.controllers.js";

// importando modulos
import { authentication } from "../middlewares/auth.middlewares.js";

router.post("/", authentication,createTaskes);

export default router;