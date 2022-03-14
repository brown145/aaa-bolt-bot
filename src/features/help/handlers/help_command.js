import getBlocks from "../templates/blocks_help.js";

export default async ({ command, ack, respond }) => {
  await ack();

  // Dev Note: uncomment when other commands are added
  // if (command.text !== "help") {
  //   return;
  // }

  await respond({
    // thread_ts: event.thread_ts,
    text: "Bot help summary",
    blocks: getBlocks({
      userName: command.user_name,
    }),
  });
};
