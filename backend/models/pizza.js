const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }
});

// .model(inCodeModelName, schemaDef, inDBCollectionName)
const Pizza = mongoose.model('Pizza', PizzaSchema, 'pizza'); 

module.exports = Pizza;

