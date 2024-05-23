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
import instance from "./shared/api/instance";
import { getCookies } from "./shared/cookies/cookies";
import { getCart } from "./redux/cart/cartOperations";

function App() {
  const dispatch = useDispatch();

  const createCart = async () => {
    try {
      const res = await instance.post("/cart/create/");
      // return res.data;

      const date = new Date();
      // 14 это количество дней
      date.setTime(date.getTime() + 14 * 24 * 60 * 60 * 1000);

      document.cookie = [
        `cartTokenPetStore=${res.data.hash_code}`,
        `expires=${date.toUTCString()}`,
        "path=/",
      ].join("; ");
    } catch (error) {
      console.log(error);
    }
  };

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

    dispatch(getCart(cookies.cartTokenPetStore));
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
