import React, { useEffect, useState } from "react";
import { Typography, Paper, Icon, Chip, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import blueGrey from "@material-ui/core/colors/blueGrey";

import { FuseAnimateGroup } from "@fuse";
import axios from "axios";
import _ from "lodash";

import Widget9 from "../../../apps/dashboards/project/widgets/Widget9";
import Widget8 from "../../../apps/dashboards/analytics/widgets/Widget8";
import Widget6 from "../../../apps/dashboards/analytics/widgets/Widget6";

const useStyles = makeStyles(theme => ({
  riskValues: {
    paddingTop: "1em",
    paddingRight: "1em",
    paddingLeft: "1em",
    "&:last-child": {
      paddingBottom: "1em"
    }
  },
  riskLabel: {
    color: blueGrey["500"]
  },
  affirmative: {
    color: green["A400"]
  },
  negative: {
    color: red["A400"]
  },
  unknown: {
    color: blueGrey["200"]
  }
}));

function ReportsTab() {
  const [data, setData] = useState(null);
  const [widget6Data, setWidget6Data] = useState(null);
  const [widget8Data, setWidget8Data] = useState(null);
  const [widget9Data, setWidget9Data] = useState(null);

  const classes = useStyles();

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

  const riskResilience = [
    {
      title: "SHELTER",
      icon: "home",
      value: "check_circle",
      iconColor: "affirmative"
    },
    {
      title: "FOOD",
      icon: "restaurant",
      value: "not_listed_location",
      iconColor: "unknown"
    },
    {
      title: "TRANSPORTATION",
      icon: "commute",
      value: "not_interested",
      iconColor: "negative"
    },
    {
      title: "SUPPORT NETWORK",
      icon: "people",
      value: "check_circle",
      iconColor: "affirmative"
    }
  ];

  return (
    <div className="md:flex max-w-2xl">
      <div className="flex flex-col flex-1 md:pr-32">
        <FuseAnimateGroup
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr 1fr",
              width: "90vw"
            }}
          >
            <div style={{ paddingRight: "1em" }}>
              <Paper className="w-full rounded-8 shadow-none border-1">
                <div style={{ display: "grid", justifyItems: "center" }}>
                  <div className="flex items-center justify-between px-16 h-64 border-b-1">
                    <Typography className="text-16 pr-4">
                      Risk &amp; Resilience
                    </Typography>
                    <Chip
                      onClick={() => console.log("chat chip clicked")}
                      size="small"
                      label="edit"
                      component="a"
                      color="primary"
                      clickable
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: "auto auto",
                      justifyItems: "center"
                    }}
                  >
                    {riskResilience.map(_riskRes => (
                      <div
                        className={classes.riskValues}
                        style={{
                          display: "grid",
                          // padding: "2em 0em",
                          justifyItems: "center"
                        }}
                      >
                        <div
                          key={_riskRes.title}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "auto max-content",
                            gridGap: "0.3em"
                          }}
                        >
                          <Icon className={classes.riskLabel}>
                            {_riskRes.icon}
                          </Icon>
                          <Typography className="text-14" color="textSecondary">
                            {_riskRes.title}
                          </Typography>
                        </div>
                        <div>
                          <Icon
                            fontSize="large"
                            className={classes[_riskRes.iconColor]}
                          >
                            {_riskRes.value}
                          </Icon>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Paper>
            </div>

            <div style={{ paddingRight: "1em" }}>
              {widget9Data && <Widget9 widget={widget9Data} />}
            </div>

            <div>{widget8Data && <Widget8 data={widget8Data} />}</div>
          </div>

          <Divider className="my-32" />

          {/* <Grid container direction="column" alignContent="center">
            {widget6Data && <Widget6 data={widget6Data} />}
          </Grid> */}
        </FuseAnimateGroup>
      </div>
    </div>
  );
}

export default ReportsTab;
