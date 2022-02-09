//import library
import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import { renderRouteHome } from './routes';
import PageNotFound from "containers/PageNotFound";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {renderRouteHome()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
