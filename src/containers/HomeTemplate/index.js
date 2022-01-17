//import libraries
import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'containers/HomeTemplate/_components/Header';
import Footer from 'containers/HomeTemplate/_components/Footer';
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
      {/* <Footer /> */}
    </>
  )
}
