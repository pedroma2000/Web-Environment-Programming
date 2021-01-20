/**
 * Ficha prática 6 - Exercicio 1
 * @author Pedro Machado "pedroma2000"
 */
var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    name: String,
    address: String,
    position: String,
    salary: Number,

    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);