import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.css";

export const LoginForm = () => {
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
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <Field className={styles.input} id="email" type="email" name="email" />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.input}
          id="password"
          type="password"
          name="password"
        />

        <button className={styles.button} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
