import React, { useEffect, useState } from "react";
import {
  AppBar,
  ButtonBase,
  Card,
  CardContent,
  Chip,
  Grid,
  Icon,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import { FuseAnimateGroup, FuseScrollbars } from "@fuse";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../store/actions";

import { makeStyles } from "@material-ui/styles";
import { darken, fade } from "@material-ui/core/styles/colorManipulator";
import clsx from "clsx";
import Chat from "./Chat";

const useStyles = makeStyles(theme => {
  return {
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
      backgroundColor: "#000000"
    },
    positive: {
      backgroundColor: "#64ffda",
      color: theme.palette.getContrastText("#64ffda")
    },
    negative: {
      backgroundColor: "#b0bec5",
      color: theme.palette.getContrastText("#b0bec5")
    },
    checkIn: {},
    activeCard: {
      margin: "0em 1.5em 1em 0em",
      backgroundColor: "#fff1eb"
    },
    nonActiveCard: {
      margin: "0em 1.5em 1em 0em",
      backgroundColor: "#ffffff"
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
  };
  //
  //
  //
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////
});

function TimelineTab({ props }) {
  const dispatch = useDispatch();
  const sessionChat = useSelector(({ profilePage }) => profilePage.session);

  const [profileData, setProfileData] = useState(null);

  ///// ///// ///// ///// ///// ///// ///// SESSION-CARD RELATED ///// ///// ///// ///// ///// /////
  //
  //
  const [sessions, setSessions] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const contactId = props.location.state.rowInfo.original.id;
    axios
      .get("/api/session/get-sessions", { params: { contactId } })
      .then(res => {
        const _sessions = res.data.sessions;
        setSessions(_sessions);
      })
      .catch(err => console.log(err));
  }, []);
  //
  //
  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////

  useEffect(() => {
    axios.get("/api/profile/about").then(res => {
      setProfileData(res.data);
    });
  }, []);

  const classes = useStyles();

  const getSessionLabelColor = label => {
    switch (label) {
      case "Check-in": {
        return "secondary";
      }
      case "CBT": {
        return "default";
      }
      case "PE": {
        return "primary";
      }
      default:
        return "primary";
    }
  };

  ///// ///// ///// ///// ///// ///// ///// CHAT RELATED ///// ///// ///// ///// ///// ///// /////
  //
  //
  //

  const [chatLog, setChatLog] = useState(null);

  const handleCardClick = e => {
    e.preventDefault();
    const sessionId = e.currentTarget.id;
    setActiveCard(sessionId);
    axios
      .get("/api/session/get-session", {
        params: {
          sessionId
        }
      })
      .then(res => {
        setChatLog(res.data.session);
      });
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
    <Grid container>
      <Grid
        item
        sm={3}
        style={{
          height: "75vh",
          overflowY: "auto"
          // boxShadow: "5px 10px 18px #888888"
        }}
      >
        <Scrollbars>
          <FuseAnimateGroup
            enter={{
              animation: "transition.slideUpBigIn"
            }}
          >
            {sessions.map(sess => (
              <ButtonBase
                className={classes.cardButton}
                onClick={e => handleCardClick(e)}
                id={sess.id}
                key={sess.id}
              >
                <Card
                  className={
                    sess.id === activeCard
                      ? classes.activeCard
                      : classes.nonActiveCard
                  }
                >
                  <CardContent className="p-22 print:p-0">
                    <Grid container>
                      <Grid item xs={4}>
                        <div
                          style={{
                            padding: "0.8em 0em 0.8em 0em"
                          }}
                        >
                          <Chip
                            variant="outlined"
                            color={getSessionLabelColor(sess.type)}
                            label={`${sess.type}`}
                          />
                        </div>
                      </Grid>

                      <Grid item>
                        <div className="flex flex-row">
                          <div
                            style={{
                              padding: "1em 1em 0.5em 1em",
                              height: "0.2em"
                            }}
                          >
                            <Typography
                              className="font-light"
                              variant="h6"
                              color="textSecondary"
                            >
                              {sess.date}
                            </Typography>
                          </div>
                        </div>
                      </Grid>

                      <Grid item>
                        <div
                          className="justify-between"
                          style={{ padding: "0.7em 1.7em 0.7em 0em" }}
                        >
                          <Typography color="textSecondary">
                            DURATION
                          </Typography>
                          <Typography>{sess.duration}</Typography>
                          <br />
                          <Typography color="textSecondary">
                            CHAR COUNT
                          </Typography>
                          <Typography>{sess.text_characters}</Typography>
                        </div>
                      </Grid>

                      <Grid item>
                        <div
                          className={clsx(
                            classes[`${sess.label}`],
                            "flex items-center p-16"
                          )}
                        >
                          <Icon className="text-36" color="inherit">
                            {sess.label === "positive"
                              ? "trending_up"
                              : "trending_down"}
                          </Icon>
                          <div
                            className={clsx(
                              classes.divider,
                              "w-px ml-8 mr-16 h-96 opacity-50"
                            )}
                          />
                          <div>
                            <Typography color="inherit">
                              Anger : {sess.scores.anger}
                            </Typography>
                            <Typography color="inherit">
                              Disgust : {sess.scores.disgust}
                            </Typography>
                            <Typography color="inherit">
                              Fear : {sess.scores.fear}
                            </Typography>
                            <Typography color="inherit">
                              Joy : {sess.scores.joy}
                            </Typography>
                            <Typography color="inherit">
                              Sadness : {sess.scores.sadness}
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </ButtonBase>
            ))}
          </FuseAnimateGroup>
        </Scrollbars>
      </Grid>
      <Grid
        item
        sm={6}
        style={{
          height: "75vh",
          overflowY: "auto",
          margin: 5,
          boxShadow: "1px 3px 5px #888888"
        }}
      >
        <Card
          style={{
            height: "75vh",
            borderColor: "#888888",
            borderWidth: "thin",
            overflowY: "auto"
          }}
        >
          {/* <main className={clsx(classes.contentWrapper, "z-10")}> */}
          {!chatLog ? (
            <div className="flex flex-col flex-1 items-center justify-center pt-64">
              <Paper className="rounded-full p-48">
                <Icon className="block text-64" color="disabled">
                  chat
                </Icon>
              </Paper>
              <Typography variant="h6" className="my-24">
                Casey's Log
              </Typography>
              <Typography
                className="hidden md:flex px-16 pb-24 mt-24 text-center"
                color="textSecondary"
              >
                Click a session to view a conversation
              </Typography>
            </div>
          ) : (
            <Scrollbars>
              <React.Fragment>
                <Chat className="flex flex-1 z-10" chatLog={chatLog} />
              </React.Fragment>
            </Scrollbars>
          )}
        </Card>
      </Grid>
      <Grid
        item
        sm={2}
        style={{
          height: "75vh",
          width: "100vh",
          overflowY: "auto",
          margin: 5,
          boxShadow: "1px 3px 5px #888888"
        }}
      >
        <Card
          style={{
            height: "100%",
            width: "100%",
            borderColor: "#888888",
            borderWidth: "thin"
          }}
        >
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
              <Typography className="font-bold mb-4 text-15">Gender</Typography>
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
              <Typography>
                John was an average neurotypical individual prior to the
                devastating effects of Hurricane Harvey and the aftermath
                flooding. He made his living managing a popular restaurant in
                downtown Houston, and is a first-time homeowner of a small house
                which is currently inhabitable due to subpar living conditions.
              </Typography>
            </div>
          </CardContent>
        </Card>
        {/* </FuseAnimateGroup> */}
      </Grid>
    </Grid>
  );
}

export default TimelineTab;
