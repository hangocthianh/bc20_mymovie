import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from 'containers/AdminTemplate/_components/Navbar'
import Sidebar from 'containers/AdminTemplate/_components/SideBar'

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (localStorage.getItem("UserLogin")) {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <>
              <Route
                exact={exact}
                path={path}
                component={component}
              />
            </>
          </div>
        </div>
      </>
    )
  }
  return <Redirect to="/auth" />
}
