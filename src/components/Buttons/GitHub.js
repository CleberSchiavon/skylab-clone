import React from "react";

import "./principalStyle.css";

import { FaGithub } from "react-icons/fa";
export default function ButtonGitHub(props) {
  return (
    <div className="containerButton">
      <button className="button">
        <FaGithub style={{ marginRight: 10 }} size="20" />
        {props.texto}
      </button>
    </div>
  );
}
