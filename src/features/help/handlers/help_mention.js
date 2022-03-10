const getBlocks = require("../templates/blocks_help");

module.exports = async ({ event, say }) => {
  await say({
    thread_ts: event.thread_ts,
    text: "Bot help summary",
    blocks: getBlocks({
      userName: event.user,
    }),
  });
};
