import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { persistedAuthReducer } from "./auth/authSlice";
import { productsReducer } from "./products/productsSlice";
import { cartReducer } from "./cart/cartSlice";
import { productReducer } from "./product/productSlice";
import { burgerAnimalReducer } from "./burgerAnimal/burgerAnimalSlice";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    burgerAnimal: burgerAnimalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
