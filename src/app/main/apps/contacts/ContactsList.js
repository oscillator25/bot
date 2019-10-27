import React, { useEffect, useState } from "react";

import clsx from "clsx";

import { Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import blueGrey from "@material-ui/core/colors/blueGrey";

import { FuseUtils, FuseAnimate } from "@fuse";
import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import ContactsMultiSelectMenu from "./ContactsMultiSelectMenu";

//
import { withRouter } from "react-router-dom";
//

// Define icon-color rules using custom colors above
const iconStyles = () => {
  return {
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
  };
};

function ContactsList({ props }) {
  const classes = makeStyles(iconStyles)();
  const dispatch = useDispatch();
  const contacts = useSelector(
    ({ contactsApp }) => contactsApp.contacts.entities
  );
  const selectedContactIds = useSelector(
    ({ contactsApp }) => contactsApp.contacts.selectedContactIds
  );
  const searchText = useSelector(
    ({ contactsApp }) => contactsApp.contacts.searchText
  );
  const user = useSelector(({ contactsApp }) => contactsApp.user);

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function getFilteredArray(entities, searchText) {
      const arr = Object.keys(entities).map(id => entities[id]);
      if (searchText.length === 0) {
        return arr;
      }
      return FuseUtils.filterArrayByString(arr, searchText);
    }

    if (contacts) {
      setFilteredData(getFilteredArray(contacts, searchText));
    }
  }, [contacts, searchText]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="textSecondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }

  return (
    <FuseAnimate animation="transition.slideUpIn" delay={300}>
      <ReactTable
        className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
        getTrProps={(state, rowInfo, column) => {
          return {
            className: "cursor-pointer",
            onClick: (e, handleOriginal) => {
              e.preventDefault();
              if (rowInfo) {
                // dispatch(Actions.openEditContactDialog(rowInfo.original));
                props.history.push("/pages/profile", { rowInfo });
              }
            }
          };
        }}
        data={filteredData}
        columns={[
          {
            Header: () =>
              selectedContactIds.length > 0 && <ContactsMultiSelectMenu />,
            accessor: "avatar",
            Cell: row => {
              console.log(row.original.icon);
              return (
                // <Icon className="list-item-icon text-16" color={testColor}>
                <Icon
                  className={clsx(
                    "list-item-icon text-28",
                    classes[row.original.icon]
                  )}
                >
                  {row.original.icon}
                </Icon>
              );
            },
            className: "justify-center",
            width: 64
          },
          {
            Header: "First Name",
            accessor: "name",
            filterable: true,
            className: "font-bold"
          },
          {
            Header: "Last Name",
            accessor: "lastName",
            filterable: true,
            className: "font-bold"
          },
          {
            Header: "Household",
            accessor: "household",
            filterable: true
          },
          {
            Header: "Location",
            accessor: "address",
            filterable: true
          },
          {
            Header: "Date Opened",
            accessor: "date",
            filterable: true
          }
        ]}
        defaultPageSize={10}
        noDataText="No contacts found"
      />
    </FuseAnimate>
  );
}

export default ContactsList;
