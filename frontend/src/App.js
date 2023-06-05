import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FaqPage,
  ProductDetailsPage,
  OrderSuccessPage,
  ProfilePage,
  CreateShopPage,
  SellerActivationPage,
  ShopLoginPage,
} from "./routes/routes";

import { ShopDashboardPage, ShopHomePage } from "./routes/ShopRoutes";

import ProtectedRoutes from "./routes/ProtectedRoutes";

import { loadSeller, loadUser } from "./redux/actions/user";
import Store from "./redux/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import SellerProtectedRoutes from "./routes/SellerProtectedRoutes";

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignupPage />} path="/signup" />
        <Route
          element={<SellerActivationPage />}
          path="/seller/activation/:activation_token"
        />
        <Route
          element={<ActivationPage />}
          path="/activation/:activation_token"
        />

        {/* main routes */}
        <Route element={<ProductsPage />} path="/products" />
        <Route element={<ProductDetailsPage />} path="/product/:name" />
        <Route element={<BestSellingPage />} path="/best-selling" />
        <Route element={<EventsPage />} path="/events" />
        <Route element={<FaqPage />} path="/faq" />
        <Route element={<OrderSuccessPage />} path="/order/success/:id" />

        {/* Shop Pages */}
        <Route element={<CreateShopPage />} path="/create-shop" />
        <Route element={<ShopLoginPage />} path="/shop-login" />
        <Route
          element={
            <SellerProtectedRoutes>
              <ShopHomePage />
            </SellerProtectedRoutes>
          }
          path="/shop/:id"
        />

        <Route
          element={
            <SellerProtectedRoutes>
              <ShopDashboardPage />
            </SellerProtectedRoutes>
          }
          path="/dashboard"
        />

        {/* user profile */}
        <Route
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
          path="/profile"
        />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
