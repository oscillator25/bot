import React from "react";
import { Card, Icon, Tooltip } from "@material-ui/core";
import { FuseAnimate } from "@fuse";
import { Typography } from "@material-ui/core";

function Marker(props) {
  return (
    <Tooltip title={props.text} placement="top">
      <Icon className="text-red">place</Icon>
    </Tooltip>
  );
}

function Widget6(props) {
  return (
    <React.Fragment>
      <FuseAnimate delay={600}>
        <Typography className="px-16 pb-8 text-24 font-300">
          Nearby Therapists
        </Typography>
      </FuseAnimate>
      <Card>
        <img src="assets/images/examples/map.png" />
      </Card>
    </React.Fragment>
  );
}

export default Widget6;
