import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { persistedAuthReducer } from "./auth/authSlice";
import { productsReducer } from "./products/productsSlice";
import { cartReducer } from "./cart/cartSlice";
import { productReducer } from "./product/productSlice";
import { burgerAnimalReducer } from "./burgerAnimal/burgerAnimalSlice";
import { featuredReducer } from "./featured/featuredSlice";
import { animalReducer } from "./animal/animalSlice";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    featured: featuredReducer,
    burgerAnimal: burgerAnimalReducer,
    animal: animalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
