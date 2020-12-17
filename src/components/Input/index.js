import React from "react";

import "./styles.css";

export default function Input(props) {
  return (
    <div className="divprincipal">
      <input placeholder={props.placeholder} />
    </div>
  );
}
