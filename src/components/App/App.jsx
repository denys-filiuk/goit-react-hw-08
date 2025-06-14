import "./App.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Layout from "../../components/Layout/Layout"; // новий імпорт
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <RegisterPage />
                </RestrictedRoute>
              }
            />

            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <LoginPage />
                </RestrictedRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
