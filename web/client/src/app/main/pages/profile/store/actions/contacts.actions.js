import axios from "axios";

export const SET_SELECTED_CONTACT_ID = "[CHAT APP] SET SELECTED CONTACT ID";

export function setSelectedContactId(contactId) {
  return {
    type: SET_SELECTED_CONTACT_ID,
    payload: contactId
  };
}
