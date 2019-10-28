import React, { useEffect, useState } from "react";
import {
  ButtonBase,
  Card,
  CardContent,
  Chip,
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
      backgroundColor: "#eceff1",
      color: theme.palette.getContrastText("#b0bec5")
    },
    activeCard: {
      margin: "0em 0em 1.5em 0em",
      backgroundColor: "#fff1eb"
    },
    nonActiveCard: {
      margin: "0em 0em 1.5em 0em",
      backgroundColor: "#ffffff"
    },
    ///// ///// ///// ///// ///// ///// ///// TAB GRID RELATED ///// ///// ///// ///// ///// ///// /////
    //
    //
    //
    mainContainer: {
      display: "grid",
      width: "minmax(100vw, 100vw)",
      gridTemplateColumns: "22em 3fr 0.7fr",
      gridColumnGap: "0.5em"
    },
    cardsContainer: {
      gridColumn: "1",
      height: "75vh",
      overflowY: "auto"
    },
    sessionCard: {
      display: "grid",
      gridTemplate: "auto auto auto / max-content 1fr",
      gridGap: "0.5em",
      placeItems: "center start"
    },
    chatLogContainer: {
      gridColumn: "2",
      height: "75vh",
      boxShadow: "1px 3px 5px #888888"
    },
    patientProfileContainer: {
      gridColumn: "3",
      height: "75vh",
      display: "grid",
      gridTemplateRows: "64px 1fr",
      gridRowGap: "0.5em"
    },
    patientNameBar: {
      gridRow: "1 / 2",
      display: "flex",
      justifyContent: "space-between",
      padding: "0em 1.3em 0em 1.3em",
      boxShadow: "1px 3px 5px #888888",
      backgroundColor: "#fff1eb",
      borderColor: "#888888",
      borderWidth: "thin",
      borderRadius: "0.3em"
    },
    patientInfoCard: {
      gridRow: "2",
      boxShadow: "1px 3px 5px #888888",
      height: "100%",
      borderColor: "#888888",
      borderWidth: "thin"
    },
    //
    //
    //
    ///// ///// ///// ///// ///// ///// ///// TAB GRID RELATED ///// ///// ///// ///// ///// ///// /////
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
    <div className={classes.mainContainer}>
      <Scrollbars className={classes.cardsContainer}>
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
                <CardContent
                  className={classes.sessionCard}
                  style={{ padding: "1.25em" }}
                >
                  <div
                    style={{
                      gridArea: "1 / 1 / 2 / 2"
                    }}
                  >
                    <Chip
                      variant="outlined"
                      color={getSessionLabelColor(sess.type)}
                      label={`${sess.type}`}
                    />
                  </div>
                  <div
                    style={{
                      gridArea: "2 / 1 / 3 / 2",
                      alignSelf: "start"
                    }}
                  >
                    <Typography color="textSecondary">DURATION</Typography>
                    <Typography>{sess.duration}</Typography>
                  </div>

                  <div
                    style={{
                      gridArea: "3 / 1 / 4 / 2"
                    }}
                  >
                    <Typography color="textSecondary">WORD COUNT</Typography>
                    <Typography>{sess.text_characters}</Typography>
                  </div>

                  <div
                    style={{
                      gridArea: "1 / 2 / 2 / 3"
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

                  <div
                    className={classes[`${sess.label}`]}
                    style={{
                      gridArea: "2 / 2 / 4 / 3",
                      display: "grid",
                      gridTemplateColumns: "auto max-content",
                      padding: "1em",
                      alignItems: "center",
                      borderRadius: "0.5em"
                    }}
                  >
                    <div
                      style={{
                        gridColumn: "1",
                        paddingRight: "0.5em"
                      }}
                    >
                      <Icon className="text-36" color="inherit">
                        {sess.label === "positive"
                          ? "trending_up"
                          : "trending_down"}
                      </Icon>
                    </div>
                    <div
                      style={{
                        borderLeft: "thin solid rgb(80,80,80)",
                        paddingLeft: "0.5em",
                        gridColumn: "2"
                      }}
                    >
                      <Typography color="inherit">
                        Anger : <b>{sess.scores.anger}</b>
                      </Typography>
                      <Typography color="inherit">
                        Disgust : <b>{sess.scores.disgust}</b>
                      </Typography>
                      <Typography color="inherit">
                        Fear : <b>{sess.scores.fear}</b>
                      </Typography>
                      <Typography color="inherit">
                        Joy : <b>{sess.scores.joy}</b>
                      </Typography>
                      <Typography color="inherit">
                        Sadness : <b>{sess.scores.sadness}</b>
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ButtonBase>
          ))}
        </FuseAnimateGroup>
      </Scrollbars>
      <div className={classes.chatLogContainer}>
        <Card
          style={{
            height: "100%",
            borderColor: "#888888",
            borderWidth: "thin",
            overflowY: "auto"
          }}
        >
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
      </div>
      <div className={classes.patientProfileContainer}>
        <Toolbar className={classes.patientNameBar}>
          <Typography variant="h6" color="inherit">
            John Doe
          </Typography>
          <Chip
            onClick={() => console.log("chat chip clicked")}
            size="medium"
            label="chat"
            component="a"
            color="secondary"
            clickable
          />
        </Toolbar>
        <Card className={classes.patientInfoCard}>
          <Scrollbars>
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
                <Typography>
                  John was an average neurotypical individual prior to the
                  devastating effects of Hurricane Harvey and the aftermath
                  flooding. He made his living managing a popular restaurant in
                  downtown Houston, and is a first-time homeowner of a small
                  house which is currently inhabitable due to subpar living
                  conditions.
                </Typography>
              </div>
            </CardContent>
          </Scrollbars>
        </Card>
      </div>
    </div>
  );
}

export default TimelineTab;
