import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import Footer from "modules/Footer/Footer";
import Header from "modules/Header/Header";
import AuthModal from "modules/Modals/AuthModal";
import CartModal from "modules/Modals/CartModal";
import Loader from "../Loader/Loader";

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
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer setActiveAuthModal={setActiveAuthModal} />

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
