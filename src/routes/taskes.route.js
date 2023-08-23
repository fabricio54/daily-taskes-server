// importando o express e a função Router
import { Router } from "express";
const router = Router();

// importando modulos
import { authentication } from "../middlewares/auth.middlewares.js";

router.post("/", authentication,createTaskes);