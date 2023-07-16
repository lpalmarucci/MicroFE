import React, { ComponentType, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { commonRoutes } from "./common.routes";
import SplashScreen from "home/components/SplashScreen";

export interface RouteType {
  path: string;
  component: any;
}

export const renderRoutes = () =>
  commonRoutes.map(({ component: Component, path }) => (
    <Route
      path={path}
      key={path}
      element={
        <Suspense fallback={<SplashScreen />}>
          <Component />
        </Suspense>
      }
    />
  ));

export const withRoutingModule = () => (
  <BrowserRouter>
    <Routes>{renderRoutes()}</Routes>
  </BrowserRouter>
);
