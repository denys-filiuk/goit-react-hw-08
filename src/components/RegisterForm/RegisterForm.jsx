import css from "./RegisterForm.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

export default function RegisterForm() {
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
      <Form className={css.formWrapper}>
        <label className={css.label} htmlFor="name">
          Username
        </label>
        <Field
          className={css.inputField}
          type="text"
          name="name"
          id="name"
          autoComplete="username"
        />

        <label className={css.label} htmlFor="email">
          Email
        </label>
        <Field
          className={css.inputField}
          type="email"
          name="email"
          id="email"
          autoComplete="email"
        />

        <label className={css.label} htmlFor="password">
          Password
        </label>
        <Field
          className={css.inputField}
          type="password"
          name="password"
          id="password"
          autoComplete="new-password"
        />

        <button className={css.submitButton} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
