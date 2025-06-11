import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
// const ContactList = lazy(() => import("../ContactList/ContactList"));
// const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
// const SearchBox = lazy(() => import("../SearchBox/SearchBox"));
import { fetchContacts } from "../../redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
const AppBar = lazy(() => import("../AppBar/AppBar"));

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
        </Routes>
      </Suspense>
    </>
  );
}

// / - маршрут домашньої сторінки додатка, де можна розмістити інформацію про додаток чи його розробника. Рендерить компонент HomePage.
// /register - публічний маршрут для реєстрації нового користувача, на якому рендериться компонент сторінки RegistrationPage з формою RegistrationForm.
// /login - публічний маршрут для логіна існуючого користувача, на якому рендериться компонент сторінки LoginPage з формою LoginForm.
// /contacts - приватний маршрут для роботи зі списком контактів користувача, на якому рендериться компонент сторінки ContactsPage.
