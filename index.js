import express from "express";
import connection from "./database/connection.js";
import bodyParser from "body-parser";
import cors from "cors";
import UserRoutes from "./routes/user.js";
import PublicationRoutes from "./routes/publication.js";
import FollowRoutes from "./routes/follow.js";

// mensaje de bienvenida para verificar que ejecute bien la API de Node

console.log ("API Node en ejecucion ");

// Conexion a la BD 
connection ();

// Crear el servidor de Node 
const app = express();
const puerto = process.env.PORT || 3900;


// Configurar cors para hacer las peticiones correctamente 
app.use(cors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE'
}));

// Decodificar los datos desde los formularios para convertilos en objetos JS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true }));

// Configurar rutas del aplicativo 
app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

// Ruta de prueba 
app.get ('/ruta-prueba', (req, res) => {
    return res.status(200).json (
        {
            'id': 1,
            'name': 'Viviana Angel',
            'username': 'viviangel'

        }

    );
    
});




// COnfigurar el servidor Node 
app.listen ( puerto, ()=> {
    console.log ("Servidor de Node ejecutándose en el puerto", puerto);
});


export default app;
