import React from 'react';
import './TelaInicial.css';
import api from '../../servicos/api';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes
import Botao from '../../componentes/Botao';
import Logo from '../../componentes/logo';
import BarraPesquisa from '../../componentes/BarraPesquisa';

function TelaInicial() {
  //api.get("/produtos").then(function(resposta){console.log(resposta.data)});

  return (
    <div class="TelaInicial MatcSreen">
    <div class="Label_20">Carrinho</div>
  <div class="Label_9">Perfil</div>
  <div>
    <Logo className="Image"/>
  </div>
  <div class="Row_20"> 
    <div class="Menu" />
    <div class="Bt_Monitores">
      <div class="Row_23">
        <div class="Bt_Mouse">Mouse
        </div>
        <div class="Bt_Teclados">Teclados
        </div>
      </div>
    </div>
    <div>
      <BarraPesquisa className="Text_Box"/>
      <Botao nome="Buscar" class="Button_2"/>
      <Botao nome="Login" class="Button_2" onClick="/login" />
    </div>
    <div class="Button_4">Monitores</div>
  </div>
  <div class="Label">Produtos Em Destaque:</div>
  <div class="Row_21">
    <div class="Box">
      <div class="Row_24"> </div>
    </div>
    <div class="Label_8">Promoções:</div>
    <div class="Label_5">asdadadada</div><img src="undefined/a2aa10aafhMiCuGS9HfMIyow6H3Ve7B4I7gODOSPjXHJ7zMxnSsdBmtK7nzu.jpg" class="Image_1" />
  </div>
  <div class="Row_22">
    <div class="Box_1">
      <div class="Row_25"> </div>
    </div>
    <div class="Label_6"></div>
    <div class="Label_2"></div>
    <div class="Label_7">VSDVFDSGFGSDF</div>
    <div class="Label_3"></div>
    <div class="Label_4">assasasasasas</div>
    <div class="Label_1">ASSAS</div>
  </div>
  <div class="Icon_1" />
</div>
  );
}

export default TelaInicial;