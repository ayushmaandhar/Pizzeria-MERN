import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
// import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: cartReducer

});

setupListeners(store.dispatch);