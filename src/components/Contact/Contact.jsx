import css from "./Contact.module.css";
import UserIcon from "../UserIcon/UserIcon";
import PhoneIcon from "../PhoneIcon/PhoneIcon";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactItem}>
      <div className={css.contactText}>
        <p>
          <span className={css.svgSpan}>
            <UserIcon />
          </span>
          {name}
        </p>
        <p>
          <span className={css.svgSpan}>
            <PhoneIcon />
          </span>
          {number}
        </p>
      </div>
      <div className={css.contactActions}>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
