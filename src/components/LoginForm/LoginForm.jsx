import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Login successful!");
      actions.resetForm();
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label>Email</label>
        <Field type="email" name="email" />

        <label>Password</label>
        <Field type="password" name="password" />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
