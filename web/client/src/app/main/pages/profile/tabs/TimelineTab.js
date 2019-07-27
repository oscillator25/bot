import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Icon,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table
} from "@material-ui/core";
import { FuseAnimateGroup } from "@fuse";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "radial-gradient(" +
      darken(theme.palette.primary.dark, 0.5) +
      " 0%, " +
      theme.palette.primary.dark +
      " 80%)"
  },
  divider: {
    backgroundColor: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  seller: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    marginRight: -88,
    paddingRight: 66,
    width: 480
  }
}));

function TimelineTab() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  //
  //
  const [invoice, setInvoice] = useState(null);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });
  //
  //

  useEffect(() => {
    axios.get("/api/profile/timeline").then(res => {
      setData(res.data);
    });
    axios.get("/api/profile/about").then(res => {
      setProfileData(res.data);
    });
    axios
      .get("/api/invoices/get-invoice", {
        params: { id: "5725a6802d" }
      })
      .then(res => {
        setInvoice(res.data);
      });
  }, []);

  if (!data || !profileData || !invoice) {
    return null;
  }

  const { general } = profileData;

  return (
    // <div className="md:flex max-w-2xl">
    <div className="flex">
      {/* <div className="flex flex-col flex-1 md:pr-32"> */}
      <div className="w-5/12 mr-12">
        <FuseAnimateGroup
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <Card className="mx-auto">
            <CardContent className="p-22 print:p-0">
              <div className="flex flex-row">
                {/* <Typography color="textSecondary" className="mb-32">
                  {invoice.date}
                </Typography> */}
                <Chip variant="outlined" color="secondary" label="PTSD" />
              </div>
              <div className="flex justify-between">
                <div>
                  <table className="mb-16">
                    <tbody>
                      <tr>
                        <td className="pr-16 pb-4">
                          <Typography
                            className="font-light"
                            variant="h6"
                            color="textSecondary"
                          >
                            DATE
                          </Typography>
                        </td>
                        <td className="pb-4">
                          <Typography className="font-light" variant="h6">
                            July 19, 2019
                          </Typography>
                        </td>
                      </tr>

                      <tr>
                        <td className="pr-16">
                          <Typography color="textSecondary">
                            DURATION
                          </Typography>
                        </td>
                        <td>
                          <Typography>17 minutes</Typography>
                        </td>
                      </tr>

                      {/* <tr>
                        <td className="pr-16">
                          <Typography color="textSecondary">
                            DUE DATE
                          </Typography>
                        </td>
                        <td>
                          <Typography>{invoice.dueDate}</Typography>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>

                <div className={clsx(classes.seller, "flex items-center p-16")}>
                  {/* <img
                    className="w-80"
                    src="assets/images/logos/fuse.svg"
                    alt="logo"
                  /> */}
                  <Icon className="text-36" color="action">
                    insert_chart
                  </Icon>

                  <div
                    className={clsx(
                      classes.divider,
                      "w-px ml-8 mr-16 h-96 opacity-50"
                    )}
                  />

                  <div>
                    <Typography color="inherit">Sadness : 60</Typography>

                    {invoice.from.address && (
                      <Typography color="inherit">Happiness : 15</Typography>
                    )}
                    {invoice.from.phone && (
                      <Typography color="inherit">Anxiety : 70</Typography>
                    )}
                    {invoice.from.email && (
                      <Typography color="inherit">Chocolate : Needs</Typography>
                    )}
                    {invoice.from.website && (
                      <Typography color="inherit">Others : Etc.</Typography>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FuseAnimateGroup>
      </div>

      <div className="w-5/12 mr-12">// // // // // // //</div>

      {/* <div className="flex flex-col md:w-320" > */}
      <div className="w-2/12">
        <FuseAnimateGroup
          enter={{
            animation: "transition.slideUpBigIn"
          }}
          style={{ position: "fixed", marginRight: "2em" }}
        >
          <Card className="w-full mb-16">
            <AppBar position="static" elevation={0}>
              <Toolbar className="pl-16 pr-8">
                <Typography
                  variant="subtitle1"
                  color="inherit"
                  className="flex-1"
                >
                  John Doe
                </Typography>
              </Toolbar>
            </AppBar>

            <CardContent>
              <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">
                  Gender
                </Typography>
                <Typography>{general.gender}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">
                  Birthday
                </Typography>
                <Typography>{general.birthday}</Typography>
              </div>

              <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">
                  Locations
                </Typography>

                <div className="flex items-center">
                  <Typography>Houston, TX</Typography>
                  <Icon className="text-16 ml-4" color="action">
                    location_on
                  </Icon>
                </div>
              </div>

              <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">
                  About John
                </Typography>
                <Typography>Sample summary</Typography>
              </div>
            </CardContent>
          </Card>
        </FuseAnimateGroup>
      </div>
    </div>
  );
}

export default TimelineTab;
