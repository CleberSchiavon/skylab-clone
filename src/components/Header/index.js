import React from "react";

import DropdownNotification from "../../components/Dropdown Notification";
import perfil from "../../assets/fotoperfil.png";
import "./styles.css";

export default function Header() {
  return (
    <div className="primeiradiv">
      <img src={{}} alt="" className="logo" />
      <div className="container2">
        <DropdownNotification />
        <a href="/conta" className="hrefconta">
          <div className="divNomeeEmail">
            <span className="nomeUsuario">Cleber Henrique</span>
            <h1 className="email">cleberschiavon@outlook.com</h1>
          </div>
          <img src={perfil} alt="perfil" className="fotoperfil" />
        </a>
      </div>
    </div>
  );
}
