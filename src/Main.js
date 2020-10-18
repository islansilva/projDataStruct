import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './paginas/pgInicial/pgInicial';
import LDDE from './paginas/LDDE/LDDE';
import HEAPS from './paginas/Heaps/Heaps';
import FILA_CIRC from './paginas/Fila Circular/Circular';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/LDDE' component={LDDE}></Route>
      <Route exact path='/FILA_CIRC' component={FILA_CIRC}></Route>
      <Route exact path='/HEAPS' component={HEAPS}></Route>
    </Switch>
  );
}

export default Main;