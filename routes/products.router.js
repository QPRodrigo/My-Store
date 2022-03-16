//Importamos los modulos
const express = require("express");
const faker = require("faker");

//Traemos en metodo
const router = express.Router();

//Se cambia el "app" por el "router"
//Se quita el URL de products
router.get('/', (req, res) => {
    const products = []
    const { size } = req.query
    const limit    = parseInt(size) || 10

    for (let index = 0; index < limit; index++) {
        products.push({
            name:  faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        })
    }

    res.json(products)
})

router.get("/filter", (req, res) => {
    res.send('Yo soy un filter');
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id === "999"){
      res.status(404).json({
        message: 'not found',
      });
    }else{
      res.status(200).json({
        id,
        name: 'Producto 2',
        price: 2000
      });
    }
});

router.post('/', (req, res)=>{
    const body = req.body;
    res.status(201).json({
        message: "created",
        data: body
    });
})

router.patch('/:id', (req, res)=>{
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: "update",
    data: body,
    id,
  });
});

router.delete('/:id', (req, res)=>{
  const { id } = req.params;

  res.json({
    message: "delete",
    id,
  });
})


//Se exporta las rutas
//Se pone al final
module.exports = router;
