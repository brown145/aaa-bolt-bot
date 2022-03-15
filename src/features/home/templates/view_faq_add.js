import { ADD_FAQ_CALLBACK_ID } from "../consts.js";

export default ({ metadata }) => ({
  type: "modal",
  callback_id: ADD_FAQ_CALLBACK_ID,
  private_metadata: JSON.stringify(metadata),
  title: {
    type: "plain_text",
    text: "Asked and Answered",
    emoji: true,
  },
  submit: {
    type: "plain_text",
    text: "Add",
    emoji: true,
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  blocks: [
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Submit new FAQs to be used in channels.",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Chanel*",
      },
    },
    {
      type: "actions",
      block_id: "faq-channel",
      elements: [
        {
          type: "channels_select",
          placeholder: {
            type: "plain_text",
            text: "Select a channel",
            emoji: true,
          },
          action_id: "channel-select",
        },
      ],
    },
    {
      type: "input",
      block_id: "faq-short_desc",
      element: {
        type: "plain_text_input",
        action_id: "plain_text_input-action",
      },
      label: {
        type: "plain_text",
        text: "Short Description",
        emoji: true,
      },
    },
    {
      type: "input",
      block_id: "faq-link",
      element: {
        type: "plain_text_input",
        action_id: "plain_text_input-action",
      },
      label: {
        type: "plain_text",
        text: "Answer URL",
        emoji: true,
      },
    },
  ],
});
