import React from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from "./assets/iconfont/iconfont";
import { renderRoutes } from 'react-router-config'
import routes from './routes';

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes (routes) }
    </div>
  );
}

export default App;
