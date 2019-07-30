import React from "react";
import { Redirect } from "react-router-dom";
import { FuseUtils } from "@fuse";
import { appsConfigs } from "app/main/apps/appsConfigs";
import { LoginConfig } from "app/main/login/LoginConfig";
import { LogoutConfig } from "app/main/logout/LogoutConfig";
import { pagesConfigs } from "app/main/pages/pagesConfigs";

const routeConfigs = [
  ...appsConfigs,
  ...pagesConfigs,
  LoginConfig,
  LogoutConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />
    // component: () => <Redirect to="/apps/dashboards/analytics" />
  },
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
];

export default routes;
