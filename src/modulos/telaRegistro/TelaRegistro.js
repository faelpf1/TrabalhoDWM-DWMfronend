import React from 'react';
import './TelaRegistro.css';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes
import Botao from '../../componentes/Botao';
import Logo from '../../componentes/logo';
import CampoTexto from '../../componentes/CampoTexto';
import CampoSenha from '../../componentes/CampoSenha';

function TelaRegistro() {
  return (
   <div class="TelaRegistro MatcSreen"><Logo class="Image"/>
  <CampoTexto texto="Digite seu nome" class="Campo_Nome"/>
  <CampoTexto texto="Digite seu E-mail" class="Campo_Email"/>
  <CampoSenha texto="Digite sua senha" class="Campo_Password"/>
  <CampoSenha texto="Confirme sua senha" class="Campo_Password_1"/>
  <div class="Row_6">
    <Botao nome="CANCELAR" class="Bt_Cancelar" onClick='/' />
    <Botao nome="CADASTRAR" class="Bt_Cadastrar" onClick='/Login'/>
  </div>
</div>
  );
}

export default TelaRegistro;
