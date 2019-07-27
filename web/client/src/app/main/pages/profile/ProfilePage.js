import React, { useState } from "react";
import withReducer from "app/store/withReducer";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import { Avatar, Button, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FusePageSimple, FuseAnimate } from "@fuse";
import TimelineTab from "./tabs/TimelineTab";
import PhotosVideosTab from "./tabs/PhotosVideosTab";
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

function ProfilePage() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <FusePageSimple
      classes={{
        header: classes.layoutHeader,
        toolbar: "px-16 sm:px-24"
      }}
      //   header={
      //     <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
      //       <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
      //         <FuseAnimate animation="transition.expandIn" delay={300}>
      //           <Avatar
      //             className="w-96 h-96"
      //             src="assets/images/avatars/Velazquez.jpg"
      //           />
      //         </FuseAnimate>
      //         <FuseAnimate animation="transition.slideLeftIn" delay={300}>
      //           <Typography className="md:ml-24" variant="h4" color="inherit">
      //             John Doe
      //           </Typography>
      //         </FuseAnimate>
      //       </div>

      //       <div className="flex items-center justify-right">
      //         <Button
      //           className="mr-8 normal-case"
      //           variant="contained"
      //           color="secondary"
      //           aria-label="Follow"
      //         >
      //           Follow
      //         </Button>
      //         <Button
      //           className="normal-case"
      //           variant="contained"
      //           color="primary"
      //           aria-label="Send Message"
      //         >
      //           Send Message
      //         </Button>
      //       </div>
      //     </div>
      //   }
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
          {selectedTab === 0 && <TimelineTab />}
          {selectedTab === 1 && <AboutTab />}
        </div>
      }
      //   rightSidebarHeader={<ProfileSidebarHeader />}
      //   rightSidebarContent={<ProfileSidebarContent />}
    />
  );
}

export default withReducer("profilePage", reducer)(ProfilePage);