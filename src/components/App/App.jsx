import "./App.css";
import { Toaster } from "react-hot-toast";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { AppBar } from "../../components/AppBar/AppBar";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegisterPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
