import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { APPROVE_PAYMENT, CONFIRM_SALES, CONNECT_WALLET_URL, LANDING_PAGE_URL, MAKE_PAYMENT, OWNED_PROPERTIES, PURCHASE_PROPERTY, CREATE_LISTING } from "../utils/constants/pages";
import PageLoader from "../component/PageLoader";

const Landingpage = React.lazy(() => import("../pages/index"));
const ConnectWallet = React.lazy(() => import("../pages/connectWallet"));
const OwnedProperties = React.lazy(() => import("../pages/ownedProperties/index"));
const PurchaseProperty = React.lazy(() => import("../pages/purchaseProperty/index"));
const MakePayment = React.lazy(() => import("../pages/purchaseProperty/makePayment"));
const ConfirmSales = React.lazy(() => import("../pages/approveProperty/index"));
const ApprovePayment = React.lazy(() => import("../pages/approveProperty/approvePayment"));
const CreateListing = React.lazy(() => import('./../pages/createListing/index'));


const WebRoute = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route index path={LANDING_PAGE_URL} element={<Landingpage />} />
                <Route path={CONNECT_WALLET_URL} element={<ConnectWallet />} />
                <Route path={OWNED_PROPERTIES} element={<OwnedProperties />} />
                <Route path={PURCHASE_PROPERTY} element={<PurchaseProperty />} />
                <Route path={MAKE_PAYMENT} element={<MakePayment />} />
                <Route path={MAKE_PAYMENT} element={<MakePayment />} />
                <Route path={CONFIRM_SALES} element={<ConfirmSales />} />
                <Route path={APPROVE_PAYMENT} element={<ApprovePayment />} />
                <Route path={CREATE_LISTING} element={<CreateListing />} />
            </Routes>   
        </Suspense>
    )
};

export default WebRoute;