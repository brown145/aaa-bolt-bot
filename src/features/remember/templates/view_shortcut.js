import { SUBMIT_CALLBACK_ID } from "../consts.js";

export default ({ metadata, referenceText, keywords }) => {
  const keywordOptions = keywords
    .slice(0, 7)
    .concat(["devportal", "scope", "oath"])
    .sort()
    .map((keyword) => ({
      text: {
        type: "plain_text",
        text: keyword,
        emoji: true,
      },
      value: keyword,
    }));

  return {
    type: "modal",
    callback_id: SUBMIT_CALLBACK_ID,
    private_metadata: JSON.stringify(metadata),
    title: {
      type: "plain_text",
      text: "Asked and Answered",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Remember",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Asked and Answered*! How about I help remember for next time. I just need some basic info to help classify this thread.",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `> ${referenceText}`,
        },
      },
      {
        type: "input",
        block_id: "short-desc",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input",
        },
        label: {
          type: "plain_text",
          text: "Short Description:",
          emoji: true,
        },
      },
      {
        type: "section",
        block_id: "keywords",
        text: {
          type: "mrkdwn",
          text: "*Keywords*:",
        },
        accessory: {
          type: "checkboxes",
          options: keywordOptions,
          action_id: "checkboxes",
        },
      },
    ],
  };
};
