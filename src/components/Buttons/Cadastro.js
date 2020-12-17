import React from "react";

import "./principalStyle.css";
export default function ButtonCadastro(props) {
  return (
    <div className="containerCadastro">
      <button className="button">{props.texto}</button>
    </div>
  );
}
