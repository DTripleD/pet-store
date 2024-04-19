import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";

import Modal from "../Modal/Modal";
import Footer from "../../modules/Footer/Footer";
import Header from "../../modules/Header/Header";

export const SharedLayout = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <Header setActive={setActive} />
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>

      <Footer />
      <Modal active={active} setActive={setActive} />
    </>
  );
};
