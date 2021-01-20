/**
 * Ficha prática 6 - Exercicio 1
 * @author Pedro Machado "pedroma2000"
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;