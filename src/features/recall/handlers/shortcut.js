import findBlockTextRecurse from "../../../util/findBlockTextRecurse.js";
import getKeywords from "../../../util/getKeywords.js";
import getMemories from "../../../db/getMemories.js";
import getParentmostMessage from "../../../util/getParentmostMessage.js";
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

  const keywordSourceText = referenceMessage.blocks.length
    ? findBlockTextRecurse(referenceMessage.blocks).join(" ")
    : referenceMessage.text;

  const keywords = getKeywords(keywordSourceText);

  const memories = getMemories(keywords);

  try {
    const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: getView({
        metadata,
        referenceText: referenceMessage.text,
        memories,
      }),
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
