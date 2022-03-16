//Importamos los modulos
const express = require("express");

//Traemos en metodo
const router = express.Router();

//Se cambia el "app" por el "router"
//Se quita el URL de products
router.get('/', (req, res) =>{
    const { limit, offset } = req.query;
    if(limit&&offset){
      res.json({
        limit,
        offset
      })
    }else{
      res.send("No hay parametros")
    }
});

//Se exporta las rutas
//Se pone al final
module.exports = router;