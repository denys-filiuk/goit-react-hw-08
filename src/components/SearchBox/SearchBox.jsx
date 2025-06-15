import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (newValue) => {
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor="text" className={css.label}>
        Find contacts
      </label>
      <input
        type="text"
        id="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
