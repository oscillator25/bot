import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { FuseAnimateGroup } from "@fuse";
import axios from "axios";

import Widget9 from "../../../apps/dashboards/project/widgets/Widget9";
import Widget8 from "../../../apps/dashboards/analytics/widgets/Widget8";
import Widget6 from "../../../apps/dashboards/analytics/widgets/Widget6";

function ReportsTab() {
  const [data, setData] = useState(null);
  const [widget6Data, setWidget6Data] = useState(null);
  const [widget8Data, setWidget8Data] = useState(null);
  const [widget9Data, setWidget9Data] = useState(null);

  useEffect(() => {
    axios.get("/api/profile/about").then(res => {
      setData(res.data);
    });
    axios.get("/api/project-dashboard-app/widgets").then(res => {
      setWidget9Data(res.data.widget9);
    });
    axios.get("/api/analytics-dashboard-app/widgets").then(res => {
      console.log(res.data.widget8);
      setWidget8Data(res.data.widget8);
      setWidget6Data(res.data.widget6);
    });
    // .then(res => console.log(res.data.widget9.mainChart));
  }, []);

  if (!data) {
    return null;
  }

  const { general, work, contact, groups, friends } = data;

  return (
    <div className="md:flex max-w-2xl">
      <div className="flex flex-col flex-1 md:pr-32">
        <FuseAnimateGroup
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <Grid container direction="row" style={{ width: "90vw" }}>
            <Grid item sm={7} style={{ padding: "0 1em 4em 0em" }}>
              {widget9Data && <Widget9 widget={widget9Data} />}
            </Grid>
            <Grid item sm={5} style={{ padding: "0 0 0em 0em" }}>
              {widget8Data && <Widget8 data={widget8Data} />}
            </Grid>
          </Grid>
          <Grid container direction="column" alignContent="center">
            {widget6Data && <Widget6 data={widget6Data} />}
          </Grid>
        </FuseAnimateGroup>
      </div>
    </div>
  );
}

export default ReportsTab;
