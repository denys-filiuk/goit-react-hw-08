import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success("Registration successful!");
      actions.resetForm();
    } catch {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formWrapper}>
        <label className={styles.label} htmlFor="name">
          Username
        </label>
        <Field
          className={styles.inputField}
          type="text"
          name="name"
          id="name"
          autoComplete="username"
        />

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <Field
          className={styles.inputField}
          type="email"
          name="email"
          id="email"
          autoComplete="email"
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.inputField}
          type="password"
          name="password"
          id="password"
          autoComplete="new-password"
        />

        <button className={styles.submitButton} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
