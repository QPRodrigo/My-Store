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
router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products)
});

router.get("/filter", async (req, res) => {
    res.send('Yo soy un filter');
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
});

//Creacion de un nuevo product
router.post('/', async (req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id', async (req, res)=>{
  //Para contralar los errores si no existe el id
  try{
    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);
    res.status(200).json(product);
  }catch(error){
    res.status(404).json({
      message: error
    });
  }

});

router.delete('/:id', async (req, res)=>{
  const { id } = req.params;

  const deleteCategory = await service.delete(id);
  res.status(200).json(deleteCategory);
})


//Se exporta las rutas
//Se pone al final
module.exports = router;
