import React from "react";

import clsx from "clsx";

import {
  Avatar,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import blueGrey from "@material-ui/core/colors/blueGrey";

import { FuseAnimate, NavLinkAdapter } from "@fuse";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  listItem: {
    color: "inherit!important",
    textDecoration: "none!important",
    height: 40,
    width: "calc(100% - 16px)",
    borderRadius: "0 20px 20px 0",
    paddingLeft: 24,
    paddingRight: 12,
    "&.active": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText + "!important",
      pointerEvents: "none",
      "& .list-item-icon": {
        color: "inherit"
      }
    },
    "& .list-item-icon": {
      marginRight: 16
    }
  },
  all: {
    color: "#000000"
  },
  trending_up: {
    color: green["A400"]
  },
  report_problem: {
    color: red["A400"]
  },
  fiber_new: {
    color: blue["500"]
  },
  trending_flat: {
    color: blueGrey["300"]
  }
}));

function ContactsSidebarContent(props) {
  const user = useSelector(({ contactsApp }) => contactsApp.user);

  const classes = useStyles(props);

  return (
    <div className="p-0 lg:p-24 lg:pr-4">
      <FuseAnimate animation="transition.slideLeftIn" delay={200}>
        <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
          <div className="p-24 flex items-center">
            {/* <Avatar className="mr-12" alt={user.name} src={user.avatar}/> */}
            <Icon className="list-item-icon text-32" color="action">
              assessment
            </Icon>
            <Typography>Priority</Typography>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/contacts/all"}
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon
                className={clsx("list-item-icon text-28", classes.all)}
                color="action"
              >
                360
              </Icon>
              <ListItemText
                className="truncate pr-0"
                primary="All"
                disableTypography={true}
              />
            </ListItem>

            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/contacts/frequent"}
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon
                className={clsx("list-item-icon text-28", classes.fiber_new)}
                color="action"
              >
                fiber_new
              </Icon>
              <ListItemText
                className="truncate pr-0"
                primary="New"
                disableTypography={true}
              />
            </ListItem>

            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/contacts/urgent"}
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon
                className={clsx(
                  "list-item-icon text-28",
                  classes.report_problem
                )}
                color="action"
              >
                report_problem
              </Icon>
              <ListItemText
                className="truncate pr-0"
                primary="Urgent"
                disableTypography={true}
              />
            </ListItem>

            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/contacts/steady"}
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon
                className={clsx(
                  "list-item-icon text-28",
                  classes.trending_flat
                )}
                color="action"
              >
                trending_flat
              </Icon>
              <ListItemText
                className="truncate pr-0"
                primary="Steady"
                disableTypography={true}
              />
            </ListItem>
            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/contacts/starred"}
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon
                className={clsx("list-item-icon text-28", classes.trending_up)}
                color="action"
              >
                trending_up
              </Icon>
              <ListItemText
                className="truncate pr-0"
                primary="Progressing"
                disableTypography={true}
              />
            </ListItem>
          </List>
        </Paper>
      </FuseAnimate>
    </div>
  );
}

export default ContactsSidebarContent;
