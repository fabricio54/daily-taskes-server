// importando o modulo de controllers
import { userCreate, userFindAll, userUpdate, findById } from "../controllers/user.controller.js"
import { validId, validUser } from "../middlewares/global.middlewares.js";
// rotas de usuários
import express from "express";
const route = express.Router();

// rotas
route.post("/", userCreate);
route.get("/", userFindAll);
route.get("/:id", validId, validUser, findById);
route.patch("/:id", validId, validUser,userUpdate);


export default route;

