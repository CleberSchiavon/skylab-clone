import React from "react";

import Input from "../../../components/Input";
import "./styles.css";

import ButtonCadastro from "../../../components/Buttons/Cadastro";

export default function Registro() {
  return (
    <div className="containerForgot">
      <div className="containerPrincipalForgot">
        <h1 className="h1ForgotPassword">Recupere sua senha</h1>
        <Input placeholder="Digite seu E-mail" />
        <ButtonCadastro texto="Recuperar" />
        <a className="textoVoltar" href="/">
          Voltar
        </a>
      </div>
    </div>
  );
}
