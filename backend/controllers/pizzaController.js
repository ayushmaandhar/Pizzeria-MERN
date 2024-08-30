const Pizza = require("../models/pizza");

const getAllPizzasFromDataBase = async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        return res.status(200).json({
            success: true,
            pizzas
        });
    } catch (error) {
        console.error('Error retrieving pizzas:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve pizzas'
        });
    }
}

module.exports = {getAllPizzasFromDataBase: getAllPizzasFromDataBase};