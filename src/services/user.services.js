// importando o model de user
import User from "../models/User.js";

// função que cria usuário
export const create = (body) => User.create(body);

// função para mostrar todos os usuários criados
export const findAll = () => User.find();

export const findById = (id) => User.findById(id);

export const update = (id, name, username, email, password) => User.findByIdAndUpdate(
    { _id: id },

    {
        name,
        username,
        email,
        password
    }
);