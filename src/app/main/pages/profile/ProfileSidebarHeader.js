import React from "react";
import { Icon, IconButton, Typography } from "@material-ui/core";
import { FuseAnimate } from "@fuse";
import { useSelector } from "react-redux";

function DetailSidebarHeader(props) {
  const files = useSelector(({ profilePage }) => profilePage.files);
  const selectedItem = useSelector(
    ({ profilePage }) => files[profilePage.selectedItemId]
  );

  // if (!selectedItem) {
  //   return null;
  // }

  return (
    <div className="flex flex-col justify-between h-full p-4 sm:p-12">
      <div className="p-12">
        <FuseAnimate delay={200}>
          <Typography variant="subtitle1" className="mb-8">
            {/* {selectedItem.name} */}
            test
          </Typography>
        </FuseAnimate>
        <FuseAnimate delay={300}>
          <Typography variant="caption" className="">
            <span>Edited</span>
            {/* <span>: {selectedItem.modified}</span> */}
            <span>: test</span>
          </Typography>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default DetailSidebarHeader;
