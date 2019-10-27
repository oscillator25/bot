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

const jsxTest = [
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
    message: (
      <span>
        We heard the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 3</Typography>}
        >
          <span style={sentiments.fear}>news</span>
        </HtmlTooltip>{" "}
        that a{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 3</Typography>}
        >
          <span style={sentiments.fear}>hurricane</span>
        </HtmlTooltip>{" "}
        was approaching and that we should be prepared. I am covering the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 5</Typography>}
        >
          <span style={sentiments.fear}>windows of my house</span>
        </HtmlTooltip>{" "}
        even as{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 5</Typography>}
        >
          <span style={sentiments.fear}>rain</span>
        </HtmlTooltip>{" "}
        is pouring like crazy outside. The{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 4</Typography>}
        >
          <span style={sentiments.fear}>wind</span>
        </HtmlTooltip>{" "}
        is howling so much but I want to finish preparing my{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 6</Typography>}
        >
          <span style={sentiments.fear}>house</span>
        </HtmlTooltip>{" "}
        as fast as I can. The{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 8</Typography>}
        >
          <span style={sentiments.fear}>ladder</span>
        </HtmlTooltip>{" "}
        feels a{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 9</Typography>}
        >
          <span style={sentiments.fear}>bit</span>
        </HtmlTooltip>{" "}
        unstable and wobbly and I start to panic. I frantically grab the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Anger: 4</Typography>}
        >
          <span style={sentiments.anger}>window handle</span>
        </HtmlTooltip>{" "}
        and it flings open all of a sudden.{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 4</Typography>}
        >
          <span style={sentiments.fear}>Wind</span>
        </HtmlTooltip>{" "}
        and{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 5</Typography>}
        >
          <span style={sentiments.fear}>rain</span>
        </HtmlTooltip>{" "}
        slaps me in the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 4</Typography>}
        >
          <span style={sentiments.fear}>face</span>
        </HtmlTooltip>{" "}
        and I fly off the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Fear: 8</Typography>}
        >
          <span style={sentiments.fear}>ladder</span>
        </HtmlTooltip>
        . I land on my back and I can feel myself gasping for{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Sadness: 5</Typography>}
        >
          <span style={sentiments.sadness}>breath</span>
        </HtmlTooltip>
        .
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Disgust: 4</Typography>}
        >
          <span style={sentiments.disgust}>Water</span>
        </HtmlTooltip>{" "}
        is pouring down the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Disgust: 4</Typography>}
        >
          <span style={sentiments.disgust}>open window</span>
        </HtmlTooltip>{" "}
        and I choke in the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Disgust: 4</Typography>}
        >
          <span style={sentiments.disgust}>water</span>
        </HtmlTooltip>{" "}
        for a second. I splash around trying to get hold of something and all I
        can think of is that I’m going to die. I finally grab onto a{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Joy: 4</Typography>}
        >
          <span style={sentiments.joy}>chair</span>
        </HtmlTooltip>{" "}
        and hoist myself up. I sit down for a while but get up right away to
        close the{" "}
        <HtmlTooltip
          placement={"top"}
          title={<Typography color="inherit">Anger: 4</Typography>}
        >
          <span style={sentiments.anger}>window</span>
        </HtmlTooltip>{" "}
        and secure it.
      </span>
    ),
    time: "2017-03-22T09:00:28.299Z"
  }
];

export default jsxTest;
