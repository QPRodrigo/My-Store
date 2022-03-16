//Importamos los modulos
const express = require("express");
//Importamos el servicio
const ProductService = require('./../services/products.service')

//Traemos en metodo
const router = express.Router();

//Traemos el servicio en una variable
const service = new ProductService()


//Se cambia el "app" por el "router"
//Se quita el URL de products
router.get('/', (req, res) => {
    const products = service.find();
    res.json(products)
});

router.get("/filter", (req, res) => {
    res.send('Yo soy un filter');
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
});

//Creacion de un nuevo product
router.post('/', (req, res)=>{
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id', (req, res)=>{
  const { id } = req.params;
  const body = req.body;

  const updataCategory = service.update(id, body);
  res.status(200).json(updataCategory);
});

router.delete('/:id', (req, res)=>{
  const { id } = req.params;

  const deleteCategory = service.delete(id);
  res.status(200).json(deleteCategory);
})


//Se exporta las rutas
//Se pone al final
module.exports = router;
