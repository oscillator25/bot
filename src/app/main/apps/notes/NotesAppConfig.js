import React from "react";

export const NotesAppConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/apps/notes/:id?/:labelHandle?/:labelId?",
      //   path: "/pages/profile/:id?/:labelHandle?/:labelId?",
      component: React.lazy(() => import("./NotesApp"))
    }
  ]
};
