import React from "react";

export default function MaterialInput({
  field,
  form: { touched, errors }, 
  label,
  placeholder,
  type,
  customFeedbackLabel,
  ...props
}) {
  return (
    <>
      <label className="col-lg-3 col-xl-3" style={{ fontSize: 16, paddingTop: 5, color: "#5C5C5C", fontWeight: '600' }} >{label}</label>
      <div className="col-lg-9 col-xl-9">
        <input
          type={type}
          placeholder={placeholder}
          className="form-control form-control-xl form-control-solid"
          {...field}
          {...props}
          required
        />
      </div>
    </>
  );
}
