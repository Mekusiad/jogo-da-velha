import React from "react";

const Input = ({ value = "", id = "", type = "" }) => {
  return <input className="input" id={id} type={type} value={value} />;
};

export default Input;
