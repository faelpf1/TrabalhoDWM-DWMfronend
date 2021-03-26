import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function BarraPesquisa(props){
  const [valor, setValor] = useState('');
  return(
    <div class={props.class}>
      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText value={props.valor} onChange={(e) => setValor(e.target.value)} />
      </span>
    </div>
  );
};
export default BarraPesquisa;