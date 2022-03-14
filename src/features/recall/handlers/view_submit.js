import getBlocks from "../templates/blocks_recalled_suggestions.js";

export default async ({ ack, view, client, logger }) => {
  await ack();
  const metadata = JSON.parse(view.private_metadata);
  const inputs = view.state.values;
  const answers_memories =
    inputs?.["memories_answers"]?.["memories_answer-inputs"]?.[
      "selected_options"
    ] || [];
  const answers_faqs =
    inputs?.["faqs_answers"]?.["faqs_answer-inputs"]?.["selected_options"] ||
    [];

  const answers = [...answers_faqs, ...answers_memories];

  if (!answers.length) {
    return;
  }

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
