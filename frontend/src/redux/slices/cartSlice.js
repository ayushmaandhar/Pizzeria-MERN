import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        pizzas: [],
        ings: [] 
    },
    reducers: {
        addPizzaToCart: (state, action) => {
            // state.pizzas.push(action.payload);
            return {
                ...state,
                pizzas: [...state.pizzas, action.payload]
            };
        },
        
        addIngredientToCart: (state, action) => {
            return {
                ...state,
                ings: [...state.ings, action.payload]
            };

          //  state.ings.push(action.payload);
        },

        removePizzaFromCart: (state, action) => {
            return {
                ...state,
                pizzas: state.pizzas.filter(item => item.name !== action.payload)
            }
        },

        removeIngFromCart: (state, action) => {
            return {
                ...state,
                ings: state.ings.filter(item => item.tname !== action.payload)
            }
        },

        emptyAllItemsFromCart: (state, action) => {
            return {
                ...state,
                pizzas: [],
                ings: []
            }
        }

    }
});

export const {
    addPizzaToCart, 
    addIngredientToCart, 
    removePizzaFromCart, 
    removeIngFromCart, 
    emptyAllItemsFromCart
} = cartSlice.actions;

export default cartSlice.reducer;

