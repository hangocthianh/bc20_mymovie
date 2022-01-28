//import libraries
import { } from 'react-router-dom';
import { lazy } from "react";

//import components
import HomeTemplate from 'containers/HomeTemplate';
import HomePage from 'containers/HomeTemplate/HomePage';
const routeHome = [
  //Home page
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  // DetailMovie
  {
     exact: false,
     path:"/detail-movie/:id",
     component: lazy(()=>import("containers/HomeTemplate/DetailMovie"))
    },
  //BookTicket
    {
     exact: false,
     path:"/book-ticket/:maLichChieu",
     component: lazy(()=>import("containers/HomeTemplate/BookTicket"))
    },
];

const renderRouteHome = () => {
  return routeHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteHome }