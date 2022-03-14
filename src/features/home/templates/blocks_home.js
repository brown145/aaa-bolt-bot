import CONSTS from "../consts.json" assert { type: "json" };

const { SUBMIT_FORGET_ACTION } = CONSTS;

const sortByShortDesc = (a, b) => (a.short_desc > b.short_desc ? 1 : -1);

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
    action_id: SUBMIT_FORGET_ACTION,
  },
});

export default ({ memories }) =>
  [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*All my memories:*",
      },
    },
  ].concat(memories.sort(sortByShortDesc).map(block_memory));
