import React from 'react';
import ReactDOM from 'react-dom';
import TelaLogin from './modulos/telaLogin/TelaLogin';
import TelaRegistro from './modulos/telaRegistro/TelaRegistro';
import TelaInicial from './modulos/telaInicial/TelaInicial';
import TelaCompra from './modulos/telaCompra/TelaCompra';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={TelaInicial} />
      <Route path="/Login" exact={true} component={TelaLogin} />
      <Route path="/Registro" exact={true} component={TelaRegistro} />
      <Route path="/Compra" exact={true} component={TelaCompra} />


    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
