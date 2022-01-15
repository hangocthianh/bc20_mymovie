import React, { Suspense } from "react";
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Switch>

        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
