import React from 'react';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CampoTexto(props){
  return(
    <div class={props.class}>
      <span className="p-float-label">
        <InputText id={props.texto} value={props.value} style={{width:220, height:40}} required={true} />
        <label htmlFor={props.texto}>{props.texto}</label>
      </span>
    </div>
  );
};
export default CampoTexto;