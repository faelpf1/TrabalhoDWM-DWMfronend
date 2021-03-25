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
import DropD from '../../componentes/DropD';

function TelaRegistro() {
  return (
   <div class="TelaLogin_1 MatcSreen">
  <div class="Row_17"> <Logo class="Image"/> 
  </div>
  <CampoTexto texto="Digite seu nome" class="Campo_Nome"/>
  <CampoTexto texto="Digite seu E-mail" class="Campo_Email"/>
  <CampoSenha texto="Digite sua senha" class="Campo_Password"/>
  <CampoSenha texto="Confirme sua senha" class="Campo_Password_1"/>
  <div class="Row_18">
    <CampoTexto texto="Digite sua cidade" class="Campo_Cidade"/>
    <DropD class="Campo_Estado" />
  </div>
  <CampoTexto texto="Digite seu endereço" class="Campo_Endereco"/>
  <CampoTexto texto="Digite seu CEP" class="Campo_CEP"/>
  <div class="Row_19">
    <Botao nome="CANCELAR" class="Bt_Cancelar" onClick='/' />
    <Botao nome="CADASTRAR" class="Bt_Cadastrar" onClick='/Login'/>
  </div>
</div>
  );
}

export default TelaRegistro;
