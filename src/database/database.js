// importando o modulo do moongose
import mongoose from "mongoose";

// criando uma constante de configuração do mongoose 
const connectDataBase = () => {
    console.log("Conectando ao banco de dados...");

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Mongodb Atlas conectado!")).catch((error) => console.log(error));
}

export default connectDataBase;