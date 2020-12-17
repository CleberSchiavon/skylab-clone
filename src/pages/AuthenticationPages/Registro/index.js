import React from "react";

import Input from "../../../components/Input";

import ButtonCadastro from "../../../components/Buttons/Cadastro";

import "./styles.css";

export default function Registro() {
  return (
    <div className="divRegister">
      <div className="divRegistroPrincipal">
        <h1 className="textoCadastro">Realize seu cadastro</h1>
        <Input placeholder="Digite seu E-mail" />
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Sua senha" />
        <Input placeholder="Confirme sua senha" />
        <ButtonCadastro texto="Cadastrar" />
        <a className="textoVoltar" href="/">
          Voltar
        </a>
      </div>
    </div>
  );
}
