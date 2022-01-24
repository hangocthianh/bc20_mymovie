import HomeTemplate from "containers/HomeTemplate";

import { lazy } from "react";
const routesHome=[
    {
        exact: false,
        path:"/detail-movie/:id",
        component: lazy(()=>import("containers/HomeTemplate/DetailMovie"))
    },
    {
        exact: false,
        path:"/book-ticket/:maLichChieu",
        component: lazy(()=>import("containers/HomeTemplate/BookTicket"))
    },

];

const renderRoutesHome=()=>{
    return routesHome.map((route, index)=>{
        return(
            <HomeTemplate
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
            />
        )
    })
}


export {renderRoutesHome};