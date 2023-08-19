// importando o modulo de controllers
import { userCreate, userFindAll } from "../controllers/user.controller.js"
// rotas de usuários
import express from "express";
const route = express.Router();

// rotas
route.post("/", userCreate);
route.get("/", userFindAll);


export default route;

