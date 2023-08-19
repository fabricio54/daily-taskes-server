// importando o modulo do moongose
import mongoose from "mongoose";

// criando uma constante de configuração do mongoose 
const connectDataBase = () => {
    console.log("Conectando ao banco de dados...");

    mongoose.connect("mongodb+srv://fabricio:fabricio@cluster0.xv0badm.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Mongodb Atlas conectado!")).catch((error) => console.log(error));
}

export default connectDataBase;