import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Login successful!");
      actions.resetForm();
      navigate("/contacts");
    } catch {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <Field className={css.input} id="email" type="email" name="email" />

        <label className={css.label} htmlFor="password">
          Password
        </label>
        <Field
          className={css.input}
          id="password"
          type="password"
          name="password"
        />

        <button className={css.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
