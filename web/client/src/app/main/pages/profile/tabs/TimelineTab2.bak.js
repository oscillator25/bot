import React, { useEffect, useState } from "react";
import {
  AppBar,
  ButtonBase,
  Card,
  CardContent,
  Chip,
  Icon,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import { FuseAnimateGroup, FuseScrollbars } from "@fuse";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../store/actions";

import { makeStyles } from "@material-ui/styles";
import { darken, fade } from "@material-ui/core/styles/colorManipulator";
import clsx from "clsx";
import Chat from "./Chat";

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "radial-gradient(" +
      darken(theme.palette.primary.dark, 0.5) +
      " 0%, " +
      theme.palette.primary.dark +
      " 80%)"
  },
  cardButton: {
    display: "block",
    textAlign: "initial"
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
  },
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////
  //
  //
  //
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 100%",
    zIndex: 10,
    background: `linear-gradient(to bottom, ${fade(
      theme.palette.background.paper,
      0.8
    )} 0,${fade(theme.palette.background.paper, 0.6)} 20%,${fade(
      theme.palette.background.paper,
      0.8
    )})`
  },
  content: {
    display: "flex",
    flex: "1 1 100%",
    minHeight: 0
  }
  //
  //
  //
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////
}));

function TimelineTab() {
  const dispatch = useDispatch();
  const sessionChat = useSelector(({ profilePage }) => profilePage.session);

  const [profileData, setProfileData] = useState(null);
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////
  //
  //
  //
  const [selectedSession, setSelectedSession] = useState(null);
  //
  //
  //
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////

  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/profile/about").then(res => {
      setProfileData(res.data);
    });
  }, []);

  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////
  //
  //
  //

  const handleCardClick = e => {
    e.preventDefault();
    const clickedSession = e.currentTarget.id;
    dispatch(Actions.getChat(clickedSession));
  };
  //
  //
  //
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////

  if (!profileData) {
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
          <FuseScrollbars className="overflow-y-auto flex-1">
            <ButtonBase
              className={classes.cardButton}
              onClick={e => handleCardClick(e)}
              id="1725a680b3249760ea21de81"
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
                    <div
                      className={clsx(classes.seller, "flex items-center p-16")}
                    >
                      <Icon className="text-36" color="inherit">
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
                        <Typography color="inherit">Happiness : 15</Typography>
                        <Typography color="inherit">Anxiety : 70</Typography>
                        <Typography color="inherit">
                          Chocolate : Needs
                        </Typography>
                        <Typography color="inherit">Others : Etc.</Typography>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ButtonBase>
          </FuseScrollbars>
        </FuseAnimateGroup>
      </div>

      <div className="w-5/12 mr-12">
        <main className={clsx(classes.contentWrapper, "z-10")}>
          {!sessionChat ? (
            <div className="flex flex-col flex-1 items-center justify-center p-24">
              <Paper className="rounded-full p-48">
                <Icon className="block text-64" color="secondary">
                  chat
                </Icon>
              </Paper>
              <Typography variant="h6" className="my-24">
                Chat App
              </Typography>
              <Typography
                className="hidden md:flex px-16 pb-24 mt-24 text-center"
                color="textSecondary"
              >
                Select a contact to start a conversation!..
              </Typography>
            </div>
          ) : (
            <React.Fragment>
              <div className={classes.content}>
                <Chat className="flex flex-1 z-10" />
              </div>
            </React.Fragment>
          )}
        </main>
      </div>

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
