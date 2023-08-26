// importando modulos
import express from 'express';
const app = express();
// conectando ao database
import connectDataBase from './src/database/database.js';

// importando rotas
import userRouter from "./src/routes/user.router.js";
import authRouter from "./src/routes/auth.route.js";
import taskesRouter from "./src/routes/taskes.route.js";

// importando o modolo dotenv para variáveis globais
import dotenv from "dotenv";
// configurando o dotenv config
dotenv.config();

// criando a porta de acesso
const port = process.env.PORT || 3000;

// conectando ao banco de dados mongodb
connectDataBase();

// configurando o que o app vai usar
app.use(express.json());
// importando rotas
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/taskes", taskesRouter);



// colocando o servidor para executar
app.listen(port, () => console.log(`Servidor rodando na port ${port}`));
