import React from 'react';
import './TelaRegistro.css';
//primereact e primeicons
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//componentes

function TelaRegistro() {
  return (
   <div class="TelaRegistro MatcSreen"><img src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg" class="Image" />
   <div class="Label_Nome">Nome:</div>
  <div class="Campo_Nome" />
  <div class="Label_Email">Email:</div>
  <div class="Campo_Email" />
  <div class="Label_Senha">Senha:</div>
  <div class="Campo_Password" />
  <div class="Label_ConfirmarSenha">Confirmar Senha:</div>
  <div class="Campo_Password_1" />
  <div class="Row_6">
    <div class="Bt_Cancelar">CANCELAR
    </div>
    <div class="Bt_Cadastrar">CADASTRAR
    </div>
  </div>
</div>
  );
}

export default TelaRegistro;
