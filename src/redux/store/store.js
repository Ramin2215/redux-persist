import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";
import  counter  from "../feature/counterSlice";


export const store = configureStore({
    reducer: {
        allState: counter,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})


export const persistor = persistStore(store)


//spiner loading