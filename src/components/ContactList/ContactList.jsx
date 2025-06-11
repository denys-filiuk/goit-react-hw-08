import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.formList}>
      {filteredContacts.map((contact) => (
        <li className={css.formItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
