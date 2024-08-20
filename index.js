import express from "express";
import connection from "./database/connection.js";

// mensaje de bienvenida para verificar que ejecute bien la API de Node

console.log ("API Node en ejecucion ");

// Conexion a la BD 
connection ();

// Crear el servidor de Node 
const app = express();
const puerto = process.env.PORT || 3900;


// 



// COnfigurar el servidor Node 
app.listen ( puerto, ()=> {
    console.log ("Servidor de Node ejecutándose en el puerto", puerto);
});


export default app;
