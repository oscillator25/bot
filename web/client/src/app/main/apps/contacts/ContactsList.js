import React, { useEffect, useState } from "react";
import {
  Avatar,
  Checkbox,
  Icon,
  IconButton,
  Typography
} from "@material-ui/core";
import { FuseUtils, FuseAnimate } from "@fuse";
import { useDispatch, useSelector } from "react-redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import ContactsMultiSelectMenu from "./ContactsMultiSelectMenu";

//
import { withRouter } from "react-router-dom";
//

function ContactsList({ props }) {
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
            Cell: row => (
              // <Avatar
              //   className="mr-8"
              //   alt={row.original.name}
              //   // src={row.value}
              // />
              <Icon className="list-item-icon text-16" color="action">
                360
              </Icon>
            ),
            className: "justify-center",
            width: 64,
            sortable: false
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
            filterable: true,
            className: "font-bold"
          },
          {
            Header: "Location",
            accessor: "location",
            filterable: true
          },
          {
            Header: "Date Opened",
            accessor: "dateOpened",
            filterable: true
          }
          // {
          //   Header: "Email",
          //   accessor: "email",
          //   filterable: true
          // },
          // {
          //   Header: "Phone",
          //   accessor: "phone",
          //   filterable: true
          // },
          // {
          //   Header: "",
          //   width: 128,
          //   Cell: row => (
          //     <div className="flex items-center">
          //       <IconButton
          //         onClick={ev => {
          //           ev.stopPropagation();
          //           dispatch(Actions.toggleStarredContact(row.original.id));
          //         }}
          //       >
          //         {user.starred && user.starred.includes(row.original.id) ? (
          //           <Icon>star</Icon>
          //         ) : (
          //           <Icon>star_border</Icon>
          //         )}
          //       </IconButton>
          //       <IconButton
          //         onClick={ev => {
          //           ev.stopPropagation();
          //           dispatch(Actions.removeContact(row.original.id));
          //         }}
          //       >
          //         <Icon>delete</Icon>
          //       </IconButton>
          //     </div>
          //   )
          // }
        ]}
        defaultPageSize={10}
        noDataText="No contacts found"
      />
    </FuseAnimate>
  );
}

export default ContactsList;
