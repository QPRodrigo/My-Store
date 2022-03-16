const faker = require('faker');

//Creamos la clase
class ProductService{
    
    //Se trabajara con array por mientras que no tenemos BD
    constructor(){
        this.products = [];
        this.generate();
    }

    //colocamos el codigo para generar datos
    generate(){
        const limit = 100;

        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name:  faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }

    }

    //Metodo para crear, el id se crea automaticamente
    create(data){
        const newProduct = {
           id: faker.datatype.uuid(),
           ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find(){
        return this.products;
    }

    findOne(id){
        return this.products.find(item => item.id === id);
    }

    update (id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('Ups, Not Found');
        }
        //Para que no se reemplace todo completamente
        const product = this.products[index];
        this.products[index] = {
          product,
          changes
        }
        return this.products[index];
    }

    delete (id) {
        const index = this.categories.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('Ups, Not Found');
        } 
        this.categories.splice(index, 1);
        return {
            delete: true
        }
    }

}

//Exportamos la clase
module.exports = ProductService;