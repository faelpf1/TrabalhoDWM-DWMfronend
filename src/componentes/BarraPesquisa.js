import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function BarraPesquisa(props){
  const [valor, setValor] = useState('');
  return(
    <div class={props.className}>
      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText value={props.valor} style={{width:800, height:50}} onChange={(e) => setValor(e.target.value)} />
      </span>
    </div>
  );
};
export default BarraPesquisa;