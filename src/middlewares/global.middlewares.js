import mongoose from "mongoose";

import { findById } from "../services/user.services.js";

export const validId = (req, res, next) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({
                message: "ID inválido"
            });
        }

        next();

    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
}

export const validUser = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await findById(id);

        if (!user) {
            res.status(400).send({
                message: "Usuário não encontrado"
            })
        }

        req.id = id;
        req.user = user;

        next();

    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
}