//import libraries
import { } from 'react-router-dom';
//import components
import HomeTemplate from 'containers/HomeTemplate';
import HomePage from 'containers/HomeTemplate/HomePage';
const routeHome = [
  //Home page
  {
    exact: true,
    path: '/',
    component: HomePage,
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

export { renderRouteHome }