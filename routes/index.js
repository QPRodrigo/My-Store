const express = require('express');

//Importamos todos los modulos del archivo products.router.js 
const productsRouter = require('./products.router');
const usuriosRouter = require('./usurios.router');
const categoryRouter = require('./category.router')

//Guardamos en una funcion las importaciones con su respectiva URL
function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/products', productsRouter)
    router.use('/users', usuriosRouter)
    router.use('/categories', categoryRouter)
}

//Exportamos la funcion
module.exports = routerApi;