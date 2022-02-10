import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from 'containers/AdminTemplate/_components/Navbar'

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Navbar />
      <>
        <Route
          exact={exact}
          path={path}
          component={component}
        />
      </>
    </>
  )
}
