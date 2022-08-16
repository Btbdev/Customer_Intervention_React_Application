import React from "react";
import { Navigate, Route, Router } from "react-router-dom";
// import RouteGuard from "./components/RouteGuard";
 
//history
import { history } from './helpers/history';
 
//pages
import Logintest from "./pages/Logintest";
// import HomePage from "./pages/Home"
// import Login from "./pages/Login"
 
// function Routes() {
//    return (
//        <Router history={history}>
//            <Routes>
//                <RouteGuard
//                    exact
//                    path="/"
//                    component={HomePage}
//                />
//                <Route
//                    path="/login"
//                    component={LoginPage}
//                />
//                <Redirect to="/" />
//            </Routes>
//        </Router>
//    );
// }
 
// export default Routes