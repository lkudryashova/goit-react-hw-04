import s from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Required")
          .min(3, "Too short! Must be at least 3 characters")
          .max(50, "Too long! Must be 50 characters or less"),
        number: Yup.string().required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      <Form className={s.form}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage className={s.error} name="name" component="div" />
        <label htmlFor="number">Number</label>
        <Field name="number" type="text" />
        <ErrorMessage className={s.error} name="number" component="div" />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
