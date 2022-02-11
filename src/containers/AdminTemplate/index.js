import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from 'containers/AdminTemplate/_components/Navbar'

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (localStorage.getItem("UserAdmin")) {
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
  return <Redirect to="/auth" />
}
