/**
 * Ficha prática 7 - Exercicio 1
 * @author Pedro Machado "pedroma2000"
 */
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,

    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);