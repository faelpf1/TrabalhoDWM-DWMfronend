import React, { useState, useEffect } from 'react';
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

function TelaLogin () {
  const [email, setEmail] = useState();
  const state = {
    cliente: [],
  };
  
  //api.get("/cliente").then(function(resposta){console.log(resposta.data)});
    
  /*useEffect(() => {
    api
      .get("/cliente")
      .then((response) => state(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro" + err);
      });
  }, []);*/

  console.log({state});
  return (
    <div className="TelaLogin">
      <div className="content"> 
      <div className="image">
        <Logo className="image"/> 
      </div> 
      <div className="Label">Eletrônicos e Variedades</div>
    </div>
    <div className="form">
      <CampoTexto texto="Digite o E-mail" className="Campo" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <CampoSenha texto="Digite sua senha" className="Campo" />
    </div>

  <div className="Row_2">
    <Botao nome="Inscreva-se!" className="Bt_Inscrever" onClick='/Registro' />
    <Botao nome="Entrar" className="Bt_Entrar" onClick='/Compra' />
  </div>
</div>
  );
}

export default TelaLogin ;
