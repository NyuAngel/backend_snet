import { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connection = async()=> {
    try {
        await connect (process.env.MONGODB_URI);
        console.log ("Conectado correctamente a la base de de datos de Atlas db_social_net_DWFSV3-179 ");
    }   catch (error) {
        console.log ("Error al conectar la DB" , error);
        throw new Error ( "¡No se ha podido conectar a la base de datos!");

    }
    
}

export default connection; 