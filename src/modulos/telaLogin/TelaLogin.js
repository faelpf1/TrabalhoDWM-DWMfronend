import React from 'react';
import './TelaLogin.css';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes

function TelaLogin() {
  return (
    <div class="TelaLogin MatcSreen">
  <div class="Row_1"> <img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg" class="Image" />
    <div class="Label">Eletrônicos e Variedades</div>
    <div class="Label_1">Crie já sua conta!</div>
  </div>
  <div class="Label_3">Email:</div>
  <div class="Campo_Email" />
  <div class="Label_4">Senha:</div>
  <div class="Campo_Password" />
  <div class="Row_2">
    <div class="Bt_Inscrever">Inscreva-se!</div>
    <div class="Bt_Entrar">Entrar
    </div>
  </div>
</div>
  );
}

export default TelaLogin;
