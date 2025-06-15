import css from "./ContaktForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully!");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact.");
      });
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[\d-]+$/, "Phone number is required")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <Field type="tel" name="number" id="number" />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
