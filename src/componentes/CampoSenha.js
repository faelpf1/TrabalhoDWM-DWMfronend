import React from 'react';
import { useState } from 'react';
import {Password} from 'primereact/password';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CampoTexto(props){
  const [valor, setValor] = useState(null);
  return(
    <div class={props.class}>
      <span className="p-float-label">
        <Password id={props.texto} value={props.texto} feedback={false} required={true} value={valor} onChange={(e) => setValor(e.target.value)}  toggleMask/>
        <label htmlhtmlfor={props.texto}>{props.texto}</label>
      </span>
    </div>
  );
};
export default CampoTexto;