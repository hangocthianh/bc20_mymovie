import HomeTemplate from "containers/HomeTemplate";

import { lazy } from "react";
const routesHome=[
    // {
    //     exact: true,
    //     path: "/",
    //     component: lazy(()=>import("containers/HomeTemplate/Homepage")),
    // },
    {
        exact: false,
        path:"/detail-movie/:id",
        component: lazy(()=>import("containers/HomeTemplate/DetailMovie"))
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