import React from 'react';
import {Password} from 'primereact/password';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CampoTexto(props){
  return(
    <div class={props.class}>
      <span className="p-float-label">
        <Password id={props.texto} value={props.texto} style={{width:220, height:40}} feedback={false} required={true} value={props.value} toggleMask/>
        <label htmlhtmlfor={props.texto}>{props.texto}</label>
      </span>
    </div>
  );
};
export default CampoTexto;