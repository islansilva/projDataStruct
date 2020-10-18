import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM.render((
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('root')
);


/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PgInicial from './paginas/pgInicial/pgInicial';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    <PgInicial / >,
    document.getElementById('root')
);

serviceWorker.unregister(); */