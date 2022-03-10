import getParentmostMessage from "../../../util/getParentmostMessage.js";
import getSuggestedThreads from "../../../util/getSuggestedThreads.js";
import getView from "../templates/view_shortcut.js";

export default async ({ shortcut, ack, client, logger }) => {
  await ack();

  const { channel, message } = shortcut;
  const ts = message.thread_ts || message.ts;

  const referenceMessage = await getParentmostMessage(client, channel, ts);

  const metadata = {
    ts,
    channel,
    from: message.user,
  };

  const suggestedThreads = getSuggestedThreads();

  try {
    const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: getView({
        metadata,
        referenceText: referenceMessage.text,
        suggestedThreads,
      }),
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
