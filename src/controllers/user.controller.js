// importando modulo de services de usuários
import { create, findAll } from "../services/user.services.js";

export const userCreate = async (req, res) => {
    try {
        // pegando os dados do usuário no body
        const { name, username, email, password } = req.body;

        // validando dados
        if (!name || !username || !email || !password) {
            res.status(400).send({ message: "Envie todos os campos para registro" });
        }

        // criando um serviço para criação de contas de usuários
        const user = await create(req.body);

        // verificando se o usuário e válido
        if (!user) {
            return res.status(400).send({
                message: "Erro na criação do usuário"
            });
        }

        // mostrando o usuário criado na tela
        res.status(200).send({
            message: "usuário criado com sucesso",
            user: {
                name,
                username,
                email,
                password,
            }
        })
    } catch (error) {
        res.send({ message: error.message });
    }
}

export const userFindAll = async (req, res) => {
    try {
        // consultando todos os usuários
        const users = await findAll();

        // verificando se o tamanho e maior que 0
        if (users.length === 0 ) {
            return res.status(400).send({
                message: "Ainda não tem usuários cadastrados no sistema"
            })
        }
        // mostrando os usuários na tela
        res.send(users);
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}