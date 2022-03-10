export default ({ userName }) => [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `Hey there <@${userName}>! I am a bot to help remember and recall common questions. To get my help use the shortcut commands on a message (see the three dots to open message context menu):`,
    },
  },
  {
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: "1. *Remember Thread* use this to assoicate a thread with a question and answer with keywords and save for later recall.",
      },
    ],
  },
  {
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: " 2. *Recall Answer* use this when you see a new question that you think has already been answered to search and share.",
      },
    ],
  },
];
