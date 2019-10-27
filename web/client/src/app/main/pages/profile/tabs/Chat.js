import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Paper,
  Typography,
  TextField,
  IconButton,
  Icon
} from "@material-ui/core";
import { FuseScrollbars } from "@fuse";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import moment from "moment/moment";
// import * as Actions from "./store/actions";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  messageRow: {
    "&.contact": {
      "& .bubble": {
        backgroundColor: "#fafafa",
        color: "#000000",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "#ff4081",
        "& .time": {
          marginLeft: 12
        }
      },
      "&.first-of-group": {
        "& .bubble": {
          borderTopLeftRadius: 20
        }
      },
      "&.last-of-group": {
        "& .bubble": {
          borderBottomLeftRadius: 20
        }
      }
    },
    "&.me": {
      paddingLeft: 40,

      "& .avatar": {
        order: 2,
        margin: "0 0 0 16px"
      },
      "& .bubble": {
        marginLeft: "auto",
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        "& .time": {
          justifyContent: "flex-end",
          right: 0,
          marginRight: 12
        }
      },
      "&.first-of-group": {
        "& .bubble": {
          borderTopRightRadius: 20
        }
      },

      "&.last-of-group": {
        "& .bubble": {
          borderBottomRightRadius: 20
        }
      }
    },
    "&.contact + .me, &.me + .contact": {
      paddingTop: 20,
      marginTop: 20
    },
    "&.first-of-group": {
      "& .bubble": {
        borderTopLeftRadius: 20,
        paddingTop: 13
      }
    },
    "&.last-of-group": {
      "& .bubble": {
        borderBottomLeftRadius: 20,
        paddingBottom: 13,
        "& .time": {
          display: "flex"
        }
      }
    }
  }
}));

function Chat(props) {
  const contacts = useSelector(
    ({ profilePage }) => profilePage.contacts.entities
  );

  //   const chat = useSelector(({ profilePage }) => profilePage.session);
  //   const chat = { ...props.chatLog };
  const [chat, setChat] = useState(props.chatLog);
  useEffect(() => {
    setChat(props.chatLog);
  }, [props.chatLog]);

  const user = {
    id: "5725a6802d10e277a0f35724",
    name: "Charles Wynn"
  };
  const classes = useStyles(props);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chat) {
      scrollToBottom();
    }
  }, [chat]);

  function scrollToBottom() {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }

  function isFirstMessageOfGroup(item, i) {
    return (
      i === 0 || (chat.dialog[i - 1] && chat.dialog[i - 1].who !== item.who)
    );
  }

  function isLastMessageOfGroup(item, i) {
    return (
      i === chat.dialog.length - 1 ||
      (chat.dialog[i + 1] && chat.dialog[i + 1].who !== item.who)
    );
  }

  return (
    <div className={clsx("flex flex-col relative", props.className)}>
      <FuseScrollbars
        ref={chatRef}
        className="flex flex-1 flex-col overflow-y-auto"
      >
        <div className="flex flex-col pt-16 pl-56 pr-16 pb-40">
          {chat.dialog.map((item, i) => {
            const contact =
              item.who === user.id
                ? user
                : contacts.find(_contact => _contact.id === item.who);
            return (
              <div
                key={item.time}
                className={clsx(
                  classes.messageRow,
                  "flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative pr-16 pb-4 pl-16",
                  { me: item.who === user.id },
                  { contact: item.who !== user.id },
                  { "first-of-group": isFirstMessageOfGroup(item, i) },
                  { "last-of-group": isLastMessageOfGroup(item, i) },
                  i + 1 === chat.dialog.length && "pb-96"
                )}
              >
                <div className="bubble flex relative items-center justify-center p-12 max-w-full">
                  <div className="leading-tight whitespace-pre-wrap">
                    {item.message}
                  </div>
                  <Typography
                    className="time absolute hidden w-full text-11 mt-8 -mb-24 left-0 bottom-0 whitespace-no-wrap"
                    color="textSecondary"
                  >
                    {moment(item.time).format("MMMM Do YYYY, h:mm:ss a")}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </FuseScrollbars>
    </div>
  );
}

export default Chat;
