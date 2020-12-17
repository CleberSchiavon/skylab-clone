import React from "react";

import "./principalStyle.css";

export default function ButtonEntrar(props) {
  return (
    <div className="containerButton">
      <a href="/dashboard">
        <button className="button">{props.texto}</button>
      </a>
    </div>
  );
}
