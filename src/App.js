//import library
import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import { renderRouteHome, renderRouteAdmin } from './routes';
import PageNotFound from "containers/PageNotFound";
import AdminLogin from "containers/AdminTemplate/AdminLogin";
import Loading from "components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Switch>
          {renderRouteHome()}
          {renderRouteAdmin()}
          <Route path="/auth" component={AdminLogin} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
