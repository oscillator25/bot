import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "app/store/withReducer";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FusePageSimple, FuseAnimate } from "@fuse";
import TimelineTab from "./tabs/TimelineTab";
import AboutTab from "./tabs/AboutTab";
//
// import ProfileSidebarHeader from "./ProfileSidebarHeader";
// import ProfileSidebarContent from "./ProfileSidebarContent";

const useStyles = makeStyles(theme => ({
  layoutHeader: {
    height: 320,
    minHeight: 320,
    [theme.breakpoints.down("md")]: {
      height: 240,
      minHeight: 240
    }
  }
}));

function ProfilePage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  const selectedContact = props.location.state.rowInfo.original.id;
  useEffect(() => {
    dispatch(Actions.setSelectedContactId(selectedContact));
  }, []);

  return (
    <FusePageSimple
      classes={{
        header: classes.layoutHeader,
        toolbar: "px-16 sm:px-24"
      }}
      contentToolbar={
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="off"
          classes={{
            root: "h-64 w-full border-b-1"
          }}
          style={{ position: "fixed", zIndex: 1, background: "#fafafa" }}
        >
          <Tab
            classes={{
              root: "h-64"
            }}
            label="Timeline"
          />
          <Tab
            classes={{
              root: "h-64"
            }}
            label="Reports"
          />
        </Tabs>
      }
      content={
        <div className="p-16 sm:p-24">
          {selectedTab === 0 && <TimelineTab props={{ ...props }} />}
          {selectedTab === 1 && <AboutTab />}
        </div>
      }
      //   rightSidebarHeader={<ProfileSidebarHeader />}
      //   rightSidebarContent={<ProfileSidebarContent />}
    />
  );
}

export default withReducer("profilePage", reducer)(ProfilePage);
