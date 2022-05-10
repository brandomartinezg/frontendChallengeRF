import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./reducers/storeReducer";


export const configureStoreInitial = configureStore({
    reducer: {
        storeReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})