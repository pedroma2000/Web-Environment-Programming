/**
 * Ficha prática 9 - REST API
 * @author Pedro Machado "pedroma2000"
 */
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name: String,
    description: String,
    quantity: Number,
    updated_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Product', productSchema)