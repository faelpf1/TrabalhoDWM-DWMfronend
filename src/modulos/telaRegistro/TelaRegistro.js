import React from 'react';
import './TelaRegistro.css';
import logo from '../../componentes/logo.svg';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes
import Botao from '../../componentes/Botao';
import Logo from '../../componentes/logo';

function TelaRegistro() {
  return (
   <div class="TelaRegistro MatcSreen"><Logo class="Image"/>
   <div class="Label_Nome">Nome:</div>
  <div class="Campo_Nome" />
  <div class="Label_Email">Email:</div>
  <div class="Campo_Email" />
  <div class="Label_Senha">Senha:</div>
  <div class="Campo_Password" />
  <div class="Label_ConfirmarSenha">Confirmar Senha:</div>
  <div class="Campo_Password_1" />
  <div class="Row_6">
    <Botao nome="CANCELAR" class="Bt_Cancelar"/>
    <Botao nome="CADASTRAR" class="Bt_Cadastrar"/>
  </div>
</div>
  );
}

export default TelaRegistro;
