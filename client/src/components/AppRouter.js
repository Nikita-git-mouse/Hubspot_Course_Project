import React from 'react';
import {Routes, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from '../routes'
import {ERROR_ROUTE} from "../utils/consts";
import { Navigate } from 'react-router-dom';
import {Context} from "../index";
import { Route, Switch } from "react-router-dom";

const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={ERROR_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;