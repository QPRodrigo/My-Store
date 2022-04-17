//Importamos los modulos
const express = require("express");
//Importamos el servicio
const ProductService = require('./../services/products.service')

// Importamos los middlewares de validacion y los metodos de esquema
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');


// Traemos en metodo
const router = express.Router();

// Traemos el servicio en una variable
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

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);


//Creacion de un nuevo product
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);


router.delete('/:id', async (req, res)=>{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
})


//Se exporta las rutas
//Se pone al final
module.exports = router;
