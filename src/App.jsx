import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
const ContactList = lazy(() => import("./components/ContactList/ContactList"));
const ContactForm = lazy(() => import("./components/ContactForm/ContactForm"));
const SearchBox = lazy(() => import("./components/SearchBox/SearchBox"));
import { fetchContacts } from "./redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p className="phonebook">Phonebook</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />

        <SearchBox />

        <ContactList />
      </Suspense>
    </>
  );
}
