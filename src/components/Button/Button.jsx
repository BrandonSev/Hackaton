import React from "react";

function Button({ value, handleClick }) {
  return (
    <button className="btn btn-xl btn-primary btn-lg" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
