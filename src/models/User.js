// importando o mongoose
import mongoose from "mongoose";

// importando o bcrypt
import bcrypt from "bcrypt";

// criando modelo para usuários
const SchemaUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})

// configurando o encriptamento da senha
SchemaUser.pre("save", async function (next) {
    // passando dois parâmetros na função de bcrypt: a string que queremos criptografar e em quantas rodadas/saltos de criptografia ele deve assumir
    this.password = await bcrypt.hash(this.password, 10);

    next();
})

// criando um esquema ja pronto
const User = mongoose.model("UserTaskes", SchemaUser);

// exportando o esquema
export default User;