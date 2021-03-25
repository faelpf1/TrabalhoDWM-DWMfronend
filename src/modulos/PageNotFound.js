import React from 'react';
import Botao from '../componentes/Botao';

function PageNotFound(){
  return (
	<div >
		<span class="sr-text">Error 404: Página Não encontrada</span>
    <Botao nome="Voltar para tela inicial" class="Bt_Entrar" onClick='/' />
  </div>
  );
};

export default PageNotFound;