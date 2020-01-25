import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import MyTextInput from "./MyTextInput";
import { login } from "../../redux/actions";

const LoginForm = ({ location, history, login }) => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Username is Required"),
          password: Yup.string()
            .min(4, "Password must have at least 4 characters.")
            .required("Password is Required")
        })}
        onSubmit={async (
          values,
          { setSubmitting, setErrors, setStatus, resetForm }
        ) => {
          try {
            await login(values);
            resetForm({});
            setStatus({ success: true });
            history.replace(
              location.state ? location.state.from.pathname : "/bubbles-page"
            );
          } catch (error) {
            setStatus({ success: false });
            setSubmitting(false);
            setErrors({ submit: error.message });
          }
        }}
      >
        <Form>
          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username here..."
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password here..."
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(login(credentials))
});

export default connect(null, mapDispatchToProps)(LoginForm);
