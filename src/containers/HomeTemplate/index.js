//import libraries
import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'containers/HomeTemplate/_components/Header/index'

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Header />
      <Route
        exact={exact}
        path={path}
        component={component}
      />
    </>
  )
}
