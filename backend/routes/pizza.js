var express = require('express');
const { getAllPizzasFromDataBase } = require('../controllers/pizzaController');
var router = express.Router();

/* GET Requests. */
router.get('/getAll', (req, res) => getAllPizzasFromDataBase(req, res));

module.exports = router;