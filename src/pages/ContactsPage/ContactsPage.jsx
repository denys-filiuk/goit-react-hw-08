import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import styles from "./ContactsPage.module.css";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={styles.contactsSection}>
      <title>Your contacts</title>
      <h1 className={styles.contactsTitle}>Contacts</h1>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </section>
  );
};
