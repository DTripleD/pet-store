import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

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
