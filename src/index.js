import React from 'react';
import ReactDOM from 'react-dom';
import TelaLogin from './modulos/telaLogin/TelaLogin';
import TelaRegistro from './modulos/telaRegistro/TelaRegistro';
import TelaInicial from './modulos/telaInicial/TelaInicial';
import TelaCompra from './modulos/telaCompra/TelaCompra';
import TelaTeste from './modulos/TelaTeste';
import PageNotFound from './modulos/PageNotFound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={TelaInicial} />
      <Route path="/Login" component={TelaLogin} />
      <Route path="/Registro" component={TelaRegistro} />
      <Route path="/Compra" component={TelaCompra} />
      <Route path="/teste" component={TelaTeste} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  </Router>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
