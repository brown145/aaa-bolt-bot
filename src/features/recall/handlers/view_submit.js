import getBlocks from "../templates/blocks_recalled_suggestions.js";

export default async ({ ack, view, client, logger }) => {
  await ack();
  const metadata = JSON.parse(view.private_metadata);
  const inputs = view.state.values;
  const answers = inputs.answers["answer-inputs"]["selected_options"];

  try {
    await client.chat.postMessage({
      channel: metadata.channel.id,
      thread_ts: metadata.ts,
      text: "review similar questions",
      blocks: getBlocks({
        answers,
        fromUserName: metadata.from,
      }),
    });
  } catch (error) {
    logger.error(error);
  }
};
