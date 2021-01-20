/**
 * Ficha prática 9 - REST API
 * @author Pedro Machado "pedroma2000"
 */
const express = require('express')
const fs = require('fs');

const productsRouter = require('./ProductView-router')
const HomeRouter = express.Router()

HomeRouter.get('/', (req, res) => {
    fs.readFile("./public/html/index.html", function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            return res.send();
        }
    })
})

HomeRouter.use('/products', productsRouter)

module.exports = HomeRouter