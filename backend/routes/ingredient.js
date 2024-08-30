var express = require('express');
const { getAllIngredientsFromDataBase } = require('../controllers/ingredientController');

var router = express.Router();

/* GET Requests. */
router.get('/getAll', (req, res) => getAllIngredientsFromDataBase(req, res));
// router.post('/insertMany', (req, res) => (req, res));

module.exports = router;