import { Route, Routes } from "react-router-dom";
import "./App.css";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NotFound from "./pages/NotFound/NotFound";
import ProductPage from "./pages/ProductPage/ProductPage";
import UserWrapper from "./components/UserWrapper/UserWrapper";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";

import OrderPage from "./pages/OrderPage/OrderPage";

import CartPage from "./pages/CartPage/CartPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import AllAboutProduct from "./modules/AllAboutProduct/AllAboutProduct";
import Description from "./modules/Description/Description";
import Сharacteristic from "./modules/Сharacteristic/Сharacteristic";

import { Toaster } from "react-hot-toast";
import { toastOptions } from "src/shared/toasterOptions/toasterOptions";
import ActivatePage from "./pages/ActivatePage/ActivatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
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
            <Route path="order" element={<OrderPage />} />
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
