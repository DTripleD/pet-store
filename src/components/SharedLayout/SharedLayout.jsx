import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import Footer from "modules/Footer/Footer";
import Header from "modules/Header/Header";
import AuthModal from "modules/Modals/AuthModal";
import CartModal from "modules/Modals/CartModal";

export const SharedLayout = () => {
  const [activeAuthModal, setActiveAuthModal] = useState(false);
  const [activeCartModal, setActiveCartModal] = useState(false);

  const onCloseModal = () => setActiveAuthModal(false);

  return (
    <>
      <Header
        setActiveAuthModal={setActiveAuthModal}
        setActiveCartModal={setActiveCartModal}
      />
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>

      <Footer />

      <AuthModal
        activeAuthModal={activeAuthModal}
        setActiveAuthModal={setActiveAuthModal}
        onCloseModal={onCloseModal}
      />

      <CartModal
        activeCartModal={activeCartModal}
        setActiveCartModal={setActiveCartModal}
      />
    </>
  );
};
