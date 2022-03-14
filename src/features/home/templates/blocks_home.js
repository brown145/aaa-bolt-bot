import CONSTS from "../consts.json" assert { type: "json" };

const {
  SUBMIT_ADD_FAQ_ACTION,
  SUBMIT_FORGET_FAQ_ACTION,
  SUBMIT_FORGET_MEMORY_ACTION,
} = CONSTS;

const sortByShortDesc = (a, b) => (a.short_desc > b.short_desc ? 1 : -1);
const sortByChannel = (a, b) => (a.channel > b.channel ? 1 : -1);

const block_memory = ({ id, short_desc, permalink }) => ({
  type: "section",
  text: {
    type: "mrkdwn",
    text: `<${permalink}|${short_desc}>`,
  },
  accessory: {
    type: "button",
    text: {
      type: "plain_text",
      text: "Forget",
      emoji: true,
    },
    value: id,
    action_id: SUBMIT_FORGET_MEMORY_ACTION,
  },
});

const block_faq = ({ id, short_desc, link, channel }) => ({
  type: "section",
  text: {
    type: "mrkdwn",
    text: `*<#${channel}>* - <${link}|${short_desc}>`,
  },
  accessory: {
    type: "button",
    text: {
      type: "plain_text",
      text: "Forget",
      emoji: true,
    },
    value: id,
    action_id: SUBMIT_FORGET_FAQ_ACTION,
  },
});

export default ({ memories, faq }) =>
  []
    .concat({
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*All FAQ:*",
      },
    })
    .concat(faq.sort(sortByShortDesc).sort(sortByChannel).map(block_faq))
    .concat({
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Add FAQ",
            emoji: true,
          },
          value: "add_faq",
          action_id: SUBMIT_ADD_FAQ_ACTION,
        },
      ],
    })
    .concat({
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*All my memories:*",
      },
    })
    .concat(memories.sort(sortByShortDesc).map(block_memory));
