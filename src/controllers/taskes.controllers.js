import { taskesCreate } from "../services/taskes.services.js";

export const createTaskes = async (req, res) => {
    try {
        // recebendo os parâmetros do body
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).send({
                message: "Preencha todos os campos para registro"
            })
        }

        // criando a taske
        await taskesCreate({
            name,
            description,
            iduser: req.userId,
        })

        res.status(201).send({
            message: "Tarefa criada com sucesso"
        })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}