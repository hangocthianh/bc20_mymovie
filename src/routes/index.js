//import libraries
import { } from 'react-router-dom';
import { lazy } from "react";

//import components
import HomeTemplate from 'containers/HomeTemplate';
import HomePage from 'containers/HomeTemplate/HomePage';
import AdminTemplate from 'containers/AdminTemplate';
import DashBoard from 'containers/AdminTemplate/Dashboard';
const routeHome = [
  //Home page
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  // ListMoviePage
  {
    exact: true,
    path: '/list-movie-page',
    component: lazy(() => import("containers/HomeTemplate/ListMoviePage"))
  },
  // DetailMovie
  {
    exact: false,
    path: "/detail-movie/:id",
    component: lazy(() => import("containers/HomeTemplate/DetailMovie"))
  },
  //BookTicket
  {
    exact: false,
    path: "/book-ticket/:maLichChieu",
    component: lazy(() => import("containers/HomeTemplate/BookTicket"))
  },
];

const routeAdmin = [
  //DashBoard
  {
    exact: true,
    path: '/dashboard',
    component: DashBoard,
  },
  //UserManagement
  {
    exact: false,
    path: '/user-management',
    component: lazy(() => import("containers/AdminTemplate/UserManagement"))
  }

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
const renderRouteAdmin = () => {
  return routeAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteHome, renderRouteAdmin }