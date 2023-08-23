import mongoose from "mongoose";

const SchemaTaske = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    createAt: {
        type: Date,
        default: Date.now(),
    },

    status: {
        type: Boolean,
        require: true,
        default: false,
    },

    iduser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserTaskes",
        require: true,
    }
})

// criando um modelo para a collection
const Taskes = mongoose.model("Taskes", SchemaTaske);

// exportando o modelo
export default Taskes;