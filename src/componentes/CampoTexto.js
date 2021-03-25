import React from 'react';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CampoTexto(props){
  const [valor, setValor] = useState('');
  return(
    <div class={props.class}>
      <span className="p-float-label">
        <InputText id={props.texto} value={valor} required={true} onChange={(e) => setValor(e.target.value)}/>
        <label htmlFor={props.texto}>{props.texto}</label>
      </span>
    </div>
  );
};
export default CampoTexto;