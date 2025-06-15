import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div style={{ display: "flex", gap: "18px" }}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
