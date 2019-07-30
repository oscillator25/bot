import React, { useState } from "react";
import {
  AppBar,
  Card,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Line } from "react-chartjs-2";

function Widget8(props) {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  console.log(props);

  return (
    <Card className="w-full rounded-8 shadow-none border-1">
      <AppBar position="static">
        <div className="p-16 pr-4 flex flex-row items-center justify-between">
          <div className="pr-16">
            <Typography className="h1 font-300" color="inherit">
              Sentiments
            </Typography>
            <Typography className="h5" color="inherit">
              Analysis Scores
            </Typography>
          </div>

          <div>
            <IconButton aria-label="more" color="inherit">
              <Icon>more_vert</Icon>
            </IconButton>
          </div>
        </div>
        <div className="p-16 pt-8 flex flex-row justify-between items-end">
          <Typography className="text-32 font-300 leading-none" color="inherit">
            Past 2 Weeks
          </Typography>
          <div className="flex flex-row items-center">
            {props.data.change.value > 0 && (
              <Icon className="text-green">trending_up</Icon>
            )}
            {props.data.change.value < 0 && (
              <Icon className="text-red">trending_down</Icon>
            )}
            <div className="ml-8">{props.data.change.percentage}%</div>
          </div>
        </div>
        <Tabs
          value={tabIndex}
          onChange={(ev, index) => setTabIndex(index)}
          variant="fullWidth"
        >
          <Tab label="ANGER" className="min-w-0" />
          <Tab label="DISGUST" className="min-w-0" />
          <Tab label="FEAR" className="min-w-0" />
          <Tab label="JOY" className="min-w-0" />
          <Tab label="SADNESS" className="min-w-0" />
        </Tabs>
      </AppBar>
      <Line
        data={{
          labels: props.data.labels,
          datasets: props.data.datasets[tabIndex].map(obj => ({
            ...obj,
            borderColor: theme.palette.secondary.main
          }))
        }}
        options={props.data.options}
      />
    </Card>
  );
}

export default React.memo(Widget8);
