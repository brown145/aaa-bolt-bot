import CONSTS from "../consts.json" assert { type: "json" };
const { SUBMIT_CALLBACK_ID } = CONSTS;

export default ({ referenceText, metadata, suggestedThreads }) => ({
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
    text: "Post",
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
        text: "This question may have already been asked and answered. Review the previously saved threads to see if they are relevant to link.",
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
      block_id: "answers",
      element: {
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select options",
          emoji: true,
        },
        options: suggestedThreads.map(({ shortDesc, link }) => ({
          text: {
            type: "plain_text",
            text: shortDesc,
            emoji: true,
          },
          value: link,
        })),
        action_id: "answer-inputs",
      },
      label: {
        type: "plain_text",
        text: "Suggested Threads",
        emoji: true,
      },
    },
  ],
});
