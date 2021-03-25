import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Botao(props){
  return(
    <div class={props.class}>
      <Button label={props.nome}/>
    </div>
  );
};
export default Botao;