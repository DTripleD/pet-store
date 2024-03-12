import { Route, Routes } from "react-router-dom";
import "./App.css";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/:catalog" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
