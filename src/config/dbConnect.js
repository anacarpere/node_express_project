import mongoose from "mongoose";

// função de connexão com o banco de dados. precisa ser async 
async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection
};

export default conectaNaDatabase;



