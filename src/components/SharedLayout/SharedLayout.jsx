import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
