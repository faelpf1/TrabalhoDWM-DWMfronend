import React, { useState } from 'react';
import './TelaRegistro.css';
import api from '../../servicos/api';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes
import Botao from '../../componentes/Botao';
import Enviar from '../../componentes/Enviar';
import Logo from '../../componentes/logo';
import CampoTexto from '../../componentes/CampoTexto';
import CampoSenha from '../../componentes/CampoSenha';
import DropD from '../../componentes/DropD';

function TelaRegistro() {
  const [nomeA, setNome] = useState();
  const [emailA, setEmail] = useState();
  const [senhaA, setSenha] = useState();
  const [estadoA, setEstado] = useState();
  const [cidadeA, setCidade] = useState();
  const [endereçoA, setEndereço] = useState();
  const [cepA, setCep] = useState();

  function enviar(){
    return api.post('/cliente',{nome: nomeA, email: emailA, senha: senhaA, estado: estadoA, cidade: cidadeA, endereço: endereçoA, cep: cepA});
  }
 
  return (
   <div class="TelaRegistro">
   <div class="content"> 
      <div className="image">
        <Logo className="image"/> 
      </div> 
  <div className="Row_1">
    <div classname="campo">
      <CampoTexto texto="Digite seu nome" className="Campo" value={nomeA} onChange={(e) => setNome(e.target.value)}/>
      <CampoTexto texto="Digite seu E-mail" className="Campo" value={emailA} onChange={(e) => setEmail(e.target.value)}/>
      <CampoSenha texto="Digite sua senha" className="Campo" value={senhaA} onChange={(e) => setSenha(e.target.value)}/>
      <CampoSenha texto="Confirme sua senha" className="Campo"/>
      <CampoTexto texto="Digite seu CEP" className="Campo" value={cepA} onChange={(e) => setCep(e.target.value)}/>
      <CampoTexto texto="Digite seu endereço" className="Campo" value={endereçoA} onChange={(e) => setEndereço(e.target.value)}/>
      <CampoTexto texto="Digite sua cidade" className="Campo"/> value={cidadeA} onChange={(e) => setCidade(e.target.value)}
      <DropD className="Campo" />
    </div>
  </div>
  </div>
  <div class="Row_2">
    <Botao nome="CANCELAR" className="Bt_Cancelar" onClick='/' />
    <Enviar nome="CADASTRAR" className="Bt_Cadastrar" onClick={enviar()}/>
  </div>
</div>
  );
}

export default TelaRegistro;
