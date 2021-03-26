import React, { useState } from 'react';
import './TelaLogin.css';
import api from '../../servicos/api';
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
  api.get('/Cliente').then(res => { console.log(res.date)});  
  const [valor, setValor] = useState("");
  return (
    <div class="TelaLogin">
      <div class="content"> 
      <div className="image">
        <Logo className="image"/> 
      </div> 
      <div class="Label">Eletrônicos e Variedades</div>
    </div>
    <div className="form">
      <CampoTexto texto="Digite o E-mail" class="Campo" valorEmail/>
      <CampoSenha texto="Digite sua senha" class="Campo" valorSenha/>
    </div>

  <div className="Row_2">
    <Botao nome="Inscreva-se!" class="Bt_Inscrever" onClick='/Registro' />
    <Botao nome="Entrar" class="Bt_Entrar" onClick='/Compra' />
  </div>
</div>
  );
}

export default TelaLogin;
