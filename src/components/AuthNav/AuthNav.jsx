import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
