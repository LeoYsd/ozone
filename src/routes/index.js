import React from "react";
import { Routes, Route } from "react-router-dom";
import { LANDING_PAGE_URL } from "../utils/constants/pages";

const Landingpage = React.lazy(() => import("../pages/index"));

const WebRoute = () => {
    return (
        <Routes>
            <Route index path={LANDING_PAGE_URL} element={<Landingpage />} />
        </Routes>   
    )
};

export default WebRoute;