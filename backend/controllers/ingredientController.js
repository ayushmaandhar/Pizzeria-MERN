const Ingredient = require("../models/ingredient");


const getAllIngredientsFromDataBase = async(req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        return res.status(200).json({
            success: true,
            ingredients
        });
    } catch (error) {
        console.error('Error retrieving ingredients:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve ingredients'
        });
    }
}

module.exports = {getAllIngredientsFromDataBase: getAllIngredientsFromDataBase};