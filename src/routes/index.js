import React from "react";
import { Routes, Route } from "react-router-dom";
import { CONNECT_WALLET_URL, LANDING_PAGE_URL, OWNED_PROPERTIES } from "../utils/constants/pages";

const Landingpage = React.lazy(() => import("../pages/index"));
const ConnectWallet = React.lazy(() => import("../pages/connectWallet"));
const OwnedProperties = React.lazy(() => import("../pages/ownedProperties/index"));

const WebRoute = () => {
    return (
        <Routes>
            <Route index path={LANDING_PAGE_URL} element={<Landingpage />} />
            <Route path={CONNECT_WALLET_URL} element={<ConnectWallet />} />
            <Route path={OWNED_PROPERTIES} element={<OwnedProperties />} />
        </Routes>   
    )
};

export default WebRoute;