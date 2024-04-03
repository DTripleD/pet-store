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
import CartPage from "./pages/CartPage/CartPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route path=":category/:catalog" element={<CatalogPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user" element={<UserWrapper />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
