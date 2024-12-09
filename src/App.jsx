import "./App.css";

import { lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const OrderPage = lazy(() => import("./pages/OrderPage/OrderPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage/CategoriesPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage/CategoryPage"));
const DeliveryPage = lazy(() => import("./pages/DeliveryPage/DeliveryPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const ActivatePage = lazy(() => import("./pages/ActivatePage/ActivatePage"));

import UserWrapper from "./components/UserWrapper/UserWrapper";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import Description from "./modules/Description/Description";
import Сharacteristic from "./modules/Сharacteristic/Сharacteristic";
import AllAboutProduct from "./modules/AllAboutProduct/AllAboutProduct";

import { toastOptions } from "src/shared/toasterOptions/toasterOptions";

import { getUserInfo } from "./redux/auth/operations";
import { selectAuthToken } from "./redux/auth/selectors";
import { getCookies } from "./shared/cookies/cookies";
import { createCart, getCart } from "./redux/cart/cartOperations";
import { createFeatured } from "./redux/featured/featuredOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = getCookies();

    if (cookies.cartTokenPetStore) {
      return;
    } else {
      createCart();
    }
  }, []);

  useEffect(() => {
    const cookies = getCookies();

    if (cookies.featuredTokenPetStore) {
      return;
    } else {
      createFeatured();
    }
  }, []);

  useEffect(() => {
    const cookies = getCookies();

    dispatch(getCart(cookies.cartTokenPetStore)).then((res) => res);
  }, [dispatch]);

  const authToken = useSelector(selectAuthToken);
  useEffect(() => {
    if (authToken) {
      dispatch(getUserInfo(authToken));
    }
  }, [authToken, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:catalog" element={<CatalogPage />} />
          <Route path=":category/:catalog/:productId" element={<ProductPage />}>
            <Route index element={<AllAboutProduct />} />
            <Route path="description" element={<Description />} />
            <Route path="characteristic" element={<Сharacteristic />} />
          </Route>

          <Route path="/user" element={<UserWrapper />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster toastOptions={toastOptions} />
    </>
  );
}

export default App;
