import getBlocks from "../templates/blocks_help.js";

export default async ({ event, say }) => {
  await say({
    thread_ts: event.thread_ts,
    text: "Bot help summary",
    blocks: getBlocks({
      userName: event.user,
    }),
  });
};
