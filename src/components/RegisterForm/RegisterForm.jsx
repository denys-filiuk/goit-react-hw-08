import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

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
      <Form>
        <label>Username</label>
        <Field type="text" name="name" />
        <label>Email</label>
        <Field type="email" name="email" />
        <label>Password</label>
        <Field type="password" name="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
