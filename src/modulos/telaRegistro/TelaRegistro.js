import React from 'react';
import './TelaRegistro.css';
import api from '../../servicos/api';
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
  /*registro = async ()=>{
    let res = await api.post('/cliente', {nome : , email: , senha: , estado:, cidade:, endereço:, cep: })
    console.log(res)
  }*/
  return (
   <div class="TelaRegistro">
   <div class="content"> 
      <div className="image">
        <Logo className="image"/> 
      </div> 
  <div className="Row_1">
    <div classname="campo">
      <CampoTexto texto="Digite seu nome" className="Campo"/>
      <CampoTexto texto="Digite seu E-mail" className="Campo"/>
      <CampoSenha texto="Digite sua senha" className="Campo"/>
      <CampoSenha texto="Confirme sua senha" className="Campo"/>
      <CampoTexto texto="Digite seu CEP" className="Campo"/>
      <CampoTexto texto="Digite seu endereço" className="Campo"/>
      <CampoTexto texto="Digite sua cidade" className="Campo"/>
      <DropD className="Campo" />
    </div>
  </div>
  </div>
  <div class="Row_2">
    <Botao nome="CANCELAR" className="Bt_Cancelar" onClick='/' />
    <Botao nome="CADASTRAR" className="Bt_Cadastrar" onClick='/Login'/>
  </div>
</div>
  );
}

export default TelaRegistro;
