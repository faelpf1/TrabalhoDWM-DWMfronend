import React from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Botao(props){
  const history = useHistory();
  return(
    <div class={props.class}>
      <Button label={props.nome} style={{width:150, height:50}} onClick={()=>history.push(props.onClick)}/>
    </div>
  );
};
export default Botao;