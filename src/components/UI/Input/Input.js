import React from "react";
import "./Input.modules.css";

const Input = (props) => {
  return (
    <div
      className={`control ${props.isValid === false ? "control.invalid" : ""}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
