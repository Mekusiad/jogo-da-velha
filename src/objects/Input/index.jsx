import React from "react";

const Input = ({ value = "", id = "", type = "" }) => {
  return <input id={id} type={type} value={value} />;
};

export default Input;
