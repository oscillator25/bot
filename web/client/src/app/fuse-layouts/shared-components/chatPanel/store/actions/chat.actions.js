import axios from "axios";
import { setselectedContactId } from "./contacts.actions";
import { closeMobileChatsSidebar } from "app/main/apps/chat/store/actions/sidebars.actions";

import Backend from "../config/firebase";

export const GET_CHAT = "[CHAT PANEL] GET CHAT";
export const REMOVE_CHAT = "[CHAT PANEL] REMOVE CHAT";
export const SEND_MESSAGE = "[CHAT PANEL] SEND MESSAGE";

export function getChat(contactId) {
  return (dispatch, getState) => {
    const { id: userId } = getState().chatPanel.user;
    // const request = axios.get("/api/chat/get-chat", {
    //   params: {
    //     contactId,
    //     userId
    //   }
    // });

    // return request.then(response => {
    //   console.log(response.data.chat);
    //   dispatch(setselectedContactId(contactId));

    //   dispatch(closeMobileChatsSidebar());

    //   return dispatch({
    //     type: GET_CHAT,
    //     chat: response.data.chat,
    //     userChatData: response.data.userChatData
    //   });
    // });
    const chat = { dialog: [], id: "random" };
    const userChatData = {
      chatId: "random",
      contactId,
      lastMessageTime: ""
    };

    return Backend.loadMessages(message => {
      if (message) {
        const messageContainer = [];
        for (const [key, value] of Object.entries(message)) {
          messageContainer.push(value);
        }

        messageContainer.forEach(message => {
          chat.dialog.push({
            message: message.text,
            time: message.createdAt,
            who: message.user._id
          });
        });

        //   userChatData.contactId =
        //     messageContainer[messageContainer.length - 1].user._id;
        userChatData.lastMessageTime =
          messageContainer[messageContainer.length - 1].createdAt;

        dispatch(setselectedContactId(contactId));

        dispatch(closeMobileChatsSidebar());

        return dispatch({
          type: GET_CHAT,
          chat,
          userChatData
        });
      } else {
        return dispatch({
          type: GET_CHAT,
          chat: null,
          userChatData: null
        });
      }
    });
  };
}

export function removeChat() {
  return {
    type: REMOVE_CHAT
  };
}

export function sendMessage(messageText, contactId, userId) {
  //   const message = {
  //     who: userId,
  //     message: messageText,
  //     time: new Date()
  //   };

  console.log("sendMessage running");

  const message = [
    {
      text: messageText,
      user: {
        _id: userId,
        name: "Charlie Wynn"
      }
    }
  ];

  //   const request = axios.post("/api/chat/send-message", {
  //     chatId,
  //     message
  //   });

  return dispatch => {
    Backend.sendMessage(message);
    const time = new Date();
    return dispatch({
      type: SEND_MESSAGE,
      message: {
        message: messageText,
        time,
        who: userId
      },
      userChatData: {
        chatId: "random",
        contactId: contactId,
        lastMessageTime: time
      }
    });
  };
}
