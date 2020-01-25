import React from "react";
import { useField } from "formik";
import { Input } from "semantic-ui-react";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input
        className="text-input"
        {...field}
        {...props}
        error={meta.touched && meta.error ? true : false}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextInput;
