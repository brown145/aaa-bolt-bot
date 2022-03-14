import CONSTS from "../consts.json" assert { type: "json" };
const { SUBMIT_CALLBACK_ID } = CONSTS;

export default ({ referenceText, metadata, memories, faqs }) => {
  const view = {
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
    ],
  };

  if (memories?.length) {
    view.blocks.push({
      type: "input",
      block_id: "memories_answers",
      optional: true,
      element: {
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select options",
          emoji: true,
        },
        options: memories.map(({ short_desc, permalink }) => ({
          text: {
            type: "plain_text",
            text: short_desc,
            emoji: true,
          },
          value: permalink,
        })),
        action_id: "memories_answer-inputs",
      },
      label: {
        type: "plain_text",
        text: "Suggested Threads",
        emoji: true,
      },
    });
  }

  if (faqs?.length) {
    view.blocks.push({
      type: "input",
      block_id: "faqs_answers",
      optional: true,
      element: {
        type: "multi_static_select",
        placeholder: {
          type: "plain_text",
          text: "Select options",
          emoji: true,
        },
        options: faqs.map(({ short_desc, link }) => ({
          text: {
            type: "plain_text",
            text: short_desc,
            emoji: true,
          },
          value: link,
        })),
        action_id: "faqs_answer-inputs",
      },
      label: {
        type: "plain_text",
        text: "Channel FAQ",
        emoji: true,
      },
    });
  }

  return view;
};