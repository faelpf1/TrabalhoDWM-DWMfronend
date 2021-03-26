import React, { useState } from 'react';
import './TelaTeste.css';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes
import Botao from '../componentes/Botao';
import CampoTexto from '../componentes/CampoTexto';
import CampoSenha from '../componentes/CampoSenha';
import Logo from '../componentes/logo';
import MostrarProduto from '../componentes/MostrarProduto';
import Menu from '../componentes/Menu';

function TelaTeste() {
  const [valor, setValor] = useState("");
  return (
    <div>
    <Menu />
    </div>
  );
}

export default TelaTeste;