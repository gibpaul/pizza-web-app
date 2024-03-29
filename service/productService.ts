import { Product } from "../model/product";
const axios = require('axios');

const productValidator = require('../validator/productValidator')


module.exports.getProducts = async function (): Promise<Product []> {
    try {
        const response = await axios.get('http://localhost:8080/api/products')

        return response.data
    } catch (e) {
        throw new Error('Could not get products')
    }
}

module.exports.getProductsById = async function (id: number): Promise<Product> {
    try {
        const response = await axios.get('http://localhost:8080/api/products/' + id)

        return response.data
    } catch (e) {
        throw new Error('Could not get products')
    }
}

module.exports.createProduct = async function (product: Product): Promise<number> {
    const error: string = productValidator.validateProduct(product)

    if(error) {
        throw new Error(error)
    }


    try {
        const response = await axios.post('http://localhost:8080/api/products/', product)

        return response.data
    } catch (e) {
        throw new Error('Could not create product')
    }
}