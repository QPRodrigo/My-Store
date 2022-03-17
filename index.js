// traemos a express
const express = require("express");
//Exportamos los modulos del archivo routes/index
const routerApi = require('./routes');

// Importar middleware
//importar las funciones que se utilizarán
const { logErrors, boomErrorHandler, errorHandler} = require('./middlewares/errorHandler');

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

app.use(express.json());


//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get ("/", (req, res) => {
  res.send("Hola mi server en express");
});

app.get("/Nueva-ruta", (req, res) => {
  res.send("Hola, soy una nueva ruta")
});


routerApi(app);
// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("Mi port " + port);
});
