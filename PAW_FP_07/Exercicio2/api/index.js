/**
 * Ficha prática 7 - Exercicio 2
 * @author Pedro Machado "pedroma2000"
 */
const express = require('express')

const productsRouter = require('./products-routers')
const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
    res.send({
        status: 'ok'
    })
})

apiRouter.use('/products', productsRouter)

module.exports = apiRouter