import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <h2>{title}</h2>
    </div>
  );
}

export default InputOption;
