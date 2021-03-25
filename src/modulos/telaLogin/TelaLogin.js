import React, { useState } from 'react';
import './TelaLogin.css';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes
import Botao from '../../componentes/Botao';
import CampoTexto from '../../componentes/CampoTexto';
import CampoSenha from '../../componentes/CampoSenha';
import Logo from '../../componentes/logo';

function TelaLogin() {
  const [valor, setValor] = useState("");
  return (
    <div class="TelaLogin MatcSreen">
  <div class="Row_1"> <Logo class="Image"/>  
    <div class="Label">Eletrônicos e Variedades</div>
    <div class="Label_1">Crie já sua conta!</div>
  </div>
  <CampoTexto texto="Digite o E-mail" class="Campo_Email"/>
  <CampoSenha texto="Digite sua senha" class="Campo_Password"/>
  <div class="Row_2">
    <Botao nome="Inscreva-se!" class="Bt_Inscrever" onClick='/Registro' />
    <Botao nome="Entrar" class="Bt_Entrar" onClick='/Compra' />
  </div>
</div>
  );
}

export default TelaLogin;
