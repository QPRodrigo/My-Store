//Importamos los modulos
const express = require("express");

//Traemos en metodo
const router = express.Router();


router.get('/:categoryId/products/:productId', (req, res)=>{
    const { categoryId,productId } = req.params;
    res.json({
      categoryId,
      productId
    });
})

//Se exporta las rutas
//Se pone al final
module.exports = router;