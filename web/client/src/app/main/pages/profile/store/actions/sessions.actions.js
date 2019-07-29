import axios from "axios";

export const GET_SESSION = "[SESSION APP] GET SESSION";

export function getChat(sessionId) {
  return dispatch => {
    const request = axios.get("/api/session/get-session", {
      params: {
        sessionId
      }
    });

    return request.then(response => {
      return dispatch({
        type: GET_SESSION,
        session: response.data.session,
        userChatData: response.data.userChatData
      });
    });
  };
}
