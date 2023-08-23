import bcrypt from "bcrypt";
import { loginService, gererateToken } from "../services/auth.service.js";

export const login = async (req, res) => {
    // trycatch pegamos o email e o password enviados pelo body
    const { email, password } = req.body;

    try {
        // verificamos se o email e válido
        const user = await loginService(email);

        if (!user) {
            res.status(404).send({
                message: "Usuário ou Senha não encontrados no sistema"
            })
        }

        // comparando as senhas do password enviado e do usuário que encontramos no sistema
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        console.log(password, user.password, passwordIsValid);

        if (!passwordIsValid || !user) {
            return res.status(404).send({
                message: "Usuário ou Senha não encontrados no sistema"
            })
        }

        // gerando o token apartir do id do usuário
        const token = gererateToken(user.id);

        // passando o token para autenticação
        res.send({ token });

    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}