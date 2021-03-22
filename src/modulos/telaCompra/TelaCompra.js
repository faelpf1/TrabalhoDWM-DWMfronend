import React from 'react';
import './TelaCompra.css';
import logo from '../../componentes/logo.svg';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes

function TelaCompra() {
  return (
    <div class="Tela_de_compra MatcSreen">
  <div class="Row_3"> <img src={logo} class="Image_5" />
    <div class="Hamburger_Menu_1" />
    <div class="Rounded_Rectangle_1">
      <div class="Button_3">Periféricos</div>
      <div class="Button_5">Hardware</div>
      <div class="Button_5">Monitores</div>
      <div class="Button_5">Smartphones</div>
      <div class="Button_5">Acessórios</div>
      <div class="Button_5">Office</div>
      <div class="Button_5">Brinquedos</div>
      <div class="Button_5">Móveis</div>
      <div class="Button_5">Serviços</div>
      <div class="Button_5">+Categorias</div>
    </div>
    <div class="Icon_3" />
    <div class="Text_Box_1" />
    <div class="Label_9">Carrinho</div>
    <div class="Label_10">Perfil</div>
    <div class="Button_3">Buscar!</div>
    <div class="Icon_4" />
    <div class="Icon_1" />
  </div>
  <div class="Label">Type something</div>
  <div class="Row_4">
    <div class="Column_3"> <img src="undefined/a2aa10aafhMiCuGS9HfMIyow6H3Ve7B4I7gODOSPjXHJ7zMxnSsdBmtK7nzu.jpg" class="Image_5" />
      <div class="Label_1">Valor:</div>
      <div class="Label_2">R$:250,99</div>
      <div class="Label_5">A vista.</div>
      <div class="Button">Comprar!</div>
      <div class="Icon_3" />
      <div class="Label_3">Especificações do Produto:</div>
    </div>
    <div class="Column_4">
      <div class="Hamburger_Menu" />
      <div class="Label_6">Parcelamento:</div>
      <div class="Text_Box" />
      <div class="Icon" />
      <div class="Label_7">Calcular Frete:</div>
      <div class="Button_1">Carrinho</div>
      <div class="Icon_2" />
    </div>
  </div>
  <div class="Label_4">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------...</div>
</div>
  );
}

export default TelaCompra;
