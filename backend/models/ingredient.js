const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    tname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

// .model(inCodeModelName, schemaDef, inDBCollectionName)
const Ingredient = mongoose.model('Ingredient', IngredientSchema, 'ingredient'); 

module.exports = Ingredient;

