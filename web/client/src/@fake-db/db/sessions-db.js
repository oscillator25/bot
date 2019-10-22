import React from "react";
import mock from "./../mock";
import { FuseUtils } from "@fuse";
import _ from "@lodash";

const sessionsDB = {
  contacts: [
    {
      id: "5725a680b3249760ea21de52",
      name: "John Doe"
    }
  ],
  sessions: [
    {
      id: "9473a637m3249760ea21df38",
      date: "Sept. 23, 2017",
      duration: "24 minutes",
      type: "CBT",
      scores: {
        sadness: 0.597,
        joy: 0.58,
        fear: 0.181,
        disgust: 0.079,
        anger: 0.122
      },
      label: "negative",
      text_characters: 549,
      dialog: []
    },
    {
      id: "5779a637m3372760ea21dh93",
      date: "Sept. 22, 2017",
      duration: "29 minutes",
      type: "PE",
      scores: {
        sadness: 0.552,
        joy: 0.071,
        fear: 0.668,
        disgust: 0.461,
        anger: 0.506
      },
      label: "negative",
      text_characters: 593,
      dialog: [
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Hi John, let's go through the Prolonged Exposure (PE) exercise that you've discussed with Charlie. Is now still a good time?",
          time: "2017-03-22T08:45:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message: "Yes",
          time: "2017-03-22T09:00:27.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Great. Sit back with your eyes closed and try to remember the trauma as vividly as possible. You can type your feelings afterwards, or record your narrative using the speech-to-text function.",
          time: "2017-03-22T08:56:28.299Z"
        },
        {
          who: "5725a680b3249760ea21de52",
          message:
            "We heard the news that a hurricane was approaching and that we should be prepared. I am covering the windows of my house even as rain is pouring like crazy outside. The wind is howling so much but I want to finish preparing my house as fast as I can. The ladder feels a bit unstable and wobbly and I start to panic. I frantically grab the window handle and it flings open all of a sudden. Wind and rain slaps me in the face and I fly off the ladder. I land on my back and I can feel myself gasping for breath. Water is pouring down the open window and I choke in the water for a second. I splash around trying to get hold of something and all I can think of is that I’m going to die. I finally grab onto a chair and hoist myself up. I sit down for a while but get up right away to close the window and secure it.",
          time: "2017-03-22T09:00:28.299Z"
        }
      ]
    },
    {
      id: "HSi3a637msdkjy2h60ea21d87b",
      date: "Sept. 20, 2017",
      duration: "41 minutes",
      type: "Check-in",
      scores: {
        sadness: 0.545,
        joy: 0.126,
        fear: 0.642,
        disgust: 0.139,
        anger: 0.109
      },
      label: "negative",
      text_characters: 760,
      dialog: []
    },
    {
      id: "pwUE3a637msdksjd&hd60ea21dh30",
      date: "Sept. 18, 2017",
      duration: "9 minutes",
      type: "CBT",
      scores: {
        sadness: 0.133,
        joy: 0.048,
        fear: 0.823,
        disgust: 0.018,
        anger: 0.044
      },
      label: "negative",
      text_characters: 242,
      dialog: []
    },
    {
      id: "1725a680b3249760ea21de81",
      date: "Sept. 24, 2017",
      duration: "17 minutes",
      type: "Check-in",
      scores: {
        sadness: 0.627,
        joy: 0.641,
        fear: 0.125,
        disgust: 0.086,
        anger: 0.081
      },
      label: "positive",
      text_characters: 486,
      dialog: [
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Hello, my name’s Casey. I will be helping you connect with other people and guide you through some exercises to help you understand yourself and your emotions better. ",
          time: "2017-03-22T08:54:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Our conversations will help me get to know you better and suggest programs that are right for you. A case worker will also be tracking our progress to help you have the best experience possible.",
          time: "2017-03-22T08:55:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "Can I call you John?",
          time: "2017-03-22T08:57:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message: "Yes.",
          time: "2017-03-22T09:01:35.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "Great! How are you feeling right now, John?",
          time: "2017-03-22T09:02:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message: "I feel a bit anxious and scared.",
          time: "2017-03-22T09:05:28.299Z"
        },

        {
          who: "5725a6802d10e277a0f35724",
          message: "I’m sorry to hear that you are feeling anxiety.",
          time: "2017-03-22T09:14:28.299Z"
        },

        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Your feelings, positive or negative, are not something to be ashamed of. Can you think of anything in particular, like concerns about family, friends, job security, or housing, for example, that makes you feel this way?",
          time: "2017-03-22T09:16:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message:
            "Yes. I am trying to reach out to my friends to make sure that they’re okay, but I haven’t heard back from some of them yet. I’m also scared of sleeping in my own room because it was where I was when I first heard the hurricane.",
          time: "2017-03-22T09:17:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "I understand. Thank you for sharing :)",
          time: "2017-03-22T09:20:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Let me ask you some questions to better understand what you are going through. n a scale of 1 - 5, how often do you have repeated disturbing memories, thoughts or images of a stressful experience of the past? (1 being “never” and 5 being “very often”)",
          time: "2017-03-22T09:22:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message: "3",
          time: "2017-03-22T09:25:28.299Z"
        },

        {
          who: "5725a6802d10e277a0f35724",
          message: "What are these stressful experiences?",
          time: "2017-03-22T09:27:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message:
            "During the storm, I slipped and fell when trying to lock down a window and almost drowned on the floor when the rain gushed in.",
          time: "2017-03-22T09:33:28.299Z"
        },

        {
          who: "5725a6802d10e277a0f35724",
          message:
            "On a scale of 1 - 5, how often do you feel very upset when something happens that reminds you of a stressful experience of the past?",
          time: "2017-03-22T09:34:28.299Z"
        },

        {
          who: "5725a680b3249760ea21de52",
          message: "4",
          time: "2017-03-22T09:35:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "What situations make you feel this way?",
          time: "2017-03-22T09:45:28.299Z"
        },
        {
          who: "5725a680b3249760ea21de52",
          message: "Mostly when I hear heavy wind and rain.!",
          time: "2017-03-22T10:00:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "On a scale of 1 - 5, how often do you have trouble concentrating?",
          time: "2017-03-22T09:47:28.299Z"
        },
        {
          who: "5725a680b3249760ea21de52",
          message: "2",
          time: "2017-03-22T10:30:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "Bot: Just a couple more questions!",
          time: "2017-03-22T10:10:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Do you avoid activities or situations because they remind you of a stressful experience from the past?",
          time: "2017-03-22T10:20:28.299Z"
        },
        {
          who: "5725a680b3249760ea21de52",
          message: "4",
          time: "2017-03-22T10:05:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "Do you feel irritable or having angry outbursts?",
          time: "2017-03-22T10:09:28.299Z"
        },
        {
          who: "5725a680b3249760ea21de52",
          message: "1",
          time: "2017-03-22T10:11:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message: "Do you feel distant or cut off from other people?",
          time: "2017-03-22T10:52:28.299Z"
        },
        {
          who: "5725a680b3249760ea21de52",
          message: "2",
          time: "2017-03-22T10:34:28.299Z"
        },
        {
          who: "5725a6802d10e277a0f35724",
          message:
            "Thank you for answering! A case worker will review your report shortly to choose an exercise that is right for you. Please check back when you receive a notice!",
          time: "2017-03-22T10:02:28.299Z"
        }
      ]
    }
  ]
  //   user: [
  //     {
  //       id: "5725a6802d10e277a0f35724",
  //       name: "Charles Wynn",
  //       chatList: [
  //         {
  //           chatId: "1725a680b3249760ea21de52",
  //           contactId: "5725a680b3249760ea21de52",
  //           lastMessageTime: "2017-06-12T02:10:18.931Z"
  //         },
  //         {
  //           chatId: "2725a680b8d240c011dd2243",
  //           contactId: "5725a680606588342058356d",
  //           lastMessageTime: "2017-02-18T10:30:18.931Z"
  //         },
  //         {
  //           chatId: "3725a6809413bf8a0a5272b4",
  //           contactId: "5725a68009e20d0a9e9acf2a",
  //           lastMessageTime: "2017-03-18T12:30:18.931Z"
  //         }
  //       ]
  //     }
  //   ]
};

// mock.onGet("/api/chat/contacts").reply(config => {
//   return [200, sessionsdb.contacts];
// });

mock.onGet("/api/session/get-session").reply(request => {
  const { sessionId } = request.params;
  //   let response;
  //   const user = sessionsdb.user.find(_user => _user.id === userId)
  //   const chat = user.chatList.find(_chat => _chat.contactId === contactId);
  //   const chatId = chat ? chat.chatId : createNewChat(contactId, userId);
  const response = sessionsDB.sessions.find(
    _session => _session.id === sessionId
  );
  return [
    200,
    {
      // chat: response
      session: response
      //   userChatData: user.chatList.find(_chat => _chat.contactId === contactId)
    }
  ];
});
mock.onGet("/api/session/get-sessions").reply(request => {
  const { contactId } = request.params;
  //   let response;
  //   const user = sessionsdb.user.find(_user => _user.id === userId)
  //   const chat = user.chatList.find(_chat => _chat.contactId === contactId);
  //   const chatId = chat ? chat.chatId : createNewChat(contactId, userId);
  const response = sessionsDB.sessions;
  return [
    200,
    {
      // chat: response
      sessions: response
      //   userChatData: user.chatList.find(_chat => _chat.contactId === contactId)
    }
  ];
});

// mock.onGet("/api/chat/user").reply(config => {
//   return [200, sessionsdb.user[0]];
// });

// mock.onPost("/api/chat/user/data").reply(request => {
//   const data = JSON.parse(request.data);
//   sessionsdb.user[0] = _.merge({}, sessionsdb.user[0], data);
//   return [200, sessionsdb.user[0]];
// });

// function createNewChat(contactId, userId) {
//   const user = sessionsdb.user.find(_user => _user.id === userId);
//   let chatId = FuseUtils.generateGUID();
//   user.chatList = [
//     {
//       chatId: chatId,
//       contactId: contactId,
//       lastMessageTime: ""
//     },
//     ...sessionsdb.user[0].chatList
//   ];
//   sessionsdb.chats = [
//     ...sessionsdb.chats,
//     {
//       id: chatId,
//       dialog: []
//     }
//   ];
//   return chatId;
// }

// mock.onPost("/api/chat/send-message").reply(request => {
//   const data = JSON.parse(request.data);
//   const { chatId, message, contactId } = data;
//   let chat = sessionsdb.chats.find(_chat => _chat.id === chatId);
//   chat.dialog = [...chat.dialog, message];
//   sessionsdb.user[0].chatList.find(
//     _contact => _contact.id === contactId
//   ).lastMessageTime = message.time;
//   return [
//     200,
//     {
//       message,
//       userChatData: sessionsdb.user[0].chatList.find(
//         _contact => _contact.id === contactId
//       )
//     }
//   ];
// });
