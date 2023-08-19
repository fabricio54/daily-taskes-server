// importando modulos
import express from 'express';
const app = express();
// conectando ao database
import connectDataBase from './src/database/database.js';

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

// colocando o servidor para executar
app.listen(port, () => console.log(`Servidor rodando na port ${port}`));
