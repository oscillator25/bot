import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "black",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const sentiments = {
  fear: {
    backgroundColor: "#f3e5f5"
  },
  anger: {
    backgroundColor: "#ffcdd2"
  },
  disgust: {
    backgroundColor: "#ccff90"
  },
  joy: {
    backgroundColor: "#f4ff81"
  },
  sadness: {
    backgroundColor: "#e3f2fd"
  }
};

const convo = [
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
    message: (
      <span>
        Yes. I am trying to reach out to my{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 2</Typography>}
        >
          <span style={sentiments.sadness}>friends</span>
        </HtmlTooltip>{" "}
        to make sure that they’re okay, but I haven’t heard back from some of
        them yet. I’m also scared of sleeping in my{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 9</Typography>}
        >
          <span style={sentiments.fear}>own room</span>
        </HtmlTooltip>{" "}
        because it was where I was when I first heard the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 9</Typography>}
        >
          <span style={sentiments.fear}>hurricane</span>
        </HtmlTooltip>
        .
      </span>
    ),
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
    message: (
      <span>
        During the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 5</Typography>}
        >
          <span style={sentiments.fear}>storm</span>
        </HtmlTooltip>
        , I slipped and fell when trying to lock down a{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 5</Typography>}
        >
          <span style={sentiments.sadness}>window</span>
        </HtmlTooltip>{" "}
        and almost drowned on the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 5</Typography>}
        >
          <span style={sentiments.sadness}>floor</span>
        </HtmlTooltip>{" "}
        when the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 5</Typography>}
        >
          <span style={sentiments.sadness}>rain</span>
        </HtmlTooltip>{" "}
        gushed in.
      </span>
    ),
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
    message: (
      <span>
        Mostly when I hear{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 5</Typography>}
        >
          <span style={sentiments.sadness}>heavy wind</span>
        </HtmlTooltip>{" "}
        and{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 5</Typography>}
        >
          <span style={sentiments.sadness}>rain</span>
        </HtmlTooltip>
        .!
      </span>
    ),
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
];

export default convo;
