import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import { SharedLayout } from "./components/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
