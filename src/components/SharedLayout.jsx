import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Header";
import Footer from "./Footer";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <div className="shared-layout-wrapper">
          <Outlet />
        </div>
      </Suspense>

      <Footer />
    </>
  );
};
