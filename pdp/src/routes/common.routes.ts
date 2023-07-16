import { lazy } from "react";
import { RouteType } from "./index";

export enum RoutePaths {
  PRODUCT_DETAIL = "/product/:id",
}

export const commonRoutes: RouteType[] = [
  {
    component: lazy(() => import("../components/ProductDetail")),
    path: RoutePaths.PRODUCT_DETAIL,
  },
  {
    component: lazy(() => import("home/components/NotFound")),
    path: "*",
  },
];
