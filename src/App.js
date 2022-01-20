//import library
import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import { renderRouteHome } from './routes'

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Switch>
          {renderRouteHome()}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
