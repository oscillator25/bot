import React from "react";

export const ProfilePageConfig = {
  settings: {
    layout: {
      style: "layout2",
      config: {
        navbar: {
          display: false
        }
      }
    }
  },
  routes: [
    {
      path: "/pages/profile",
      component: React.lazy(() => import("./ProfilePage"))
    }
  ]
};
