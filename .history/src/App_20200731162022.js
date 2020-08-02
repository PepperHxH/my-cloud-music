import React from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from "./assets/iconfont/iconfont";
import { renderRoutes } from 'react-router-config'
import routes from './routes';
import { HashRouters } from 'react-router-dom'

function App() {
  return (
    <HashRouters>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes (routes) }
    </HashRouters>
  );
}

export default App;
