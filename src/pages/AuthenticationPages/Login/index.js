import React from "react";
import "./styles.css";

import skylab from "../../../assets/skylab.svg";

import Input from "../../../components/Input";

import ButtonEntrar from "../../../components/Buttons/Entrar";
import ButtonGitHub from "../../../components/Buttons/GitHub";

export default function Login() {
  return (
    <div className="divLogin">
      <div className="divLoginPrincipal">
        <img src={skylab} alt="teste" className="imgLogo" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <a href="/forgot" className="aForgot">
          Esqueci minha senha
        </a>
        <ButtonEntrar texto="Entrar" />
        <a href="/registro" className="textRegister">
          Não tem uma conta? Registre-se
        </a>
        <h2 className="ou">ou</h2>
        <ButtonGitHub texto="Github" />
      </div>
    </div>
  );
}
