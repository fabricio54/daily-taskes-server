// importando modulos
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findById } from "../services/user.services.js";

// configurações
dotenv.config();

export const authentication = (req, res, next) => {
    try {
        // pegando o objeto passado nos headers
        const { authorization } = req.headers;

        // verificando se o usuário está autorizado a entrar. se não retorna o status http 401 de não autorizado
        if (!authorization) {
            return res.status(401).send({ message: "Usuário não autorizado" });
        }

        // desmenbrando o autorization em um array com a função split do js
        const parts = authorization.split(" ");

        // verificando se o array tem o tamanho 2
        if (parts.lenght !== 2) {
            res.status(401).send({ message: "Tamanho inválido" });
        }

        // descontruindo o array
        const [schema, token] = parts;

        // verificando o valor de schema
        if (schema !== "Bearer") {
            res.status(401).send({ message: "schema inválido" });
        }

        // validando o token

        // função do jwt que vai validar o token essa função recebe três parâmetros: token, secrety variavel e uma função de callback que recebe o erro e o ojeto

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Token inválido" })
            }

            // consultando se o id é válido
            const user = await findById(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({
                    message: "Token inválido"
                })
            }

            // criando um user id para passar para próxima função
            req.userId = user.id;

            // passando para a próxima função
            return next();
        })

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}