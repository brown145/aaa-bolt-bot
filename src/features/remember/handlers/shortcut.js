import findBlockTextRecurse from "../../../util/findBlockTextRecurse.js";
import getKeywords from "../../../util/getKeywords.js";
import getParentmostMessage from "../../../util/getParentmostMessage.js";
import getView from "../templates/view_shortcut.js";

export default async ({ shortcut, body, ack, client, logger }) => {
  await ack();

  const { channel } = shortcut;

  const ts = shortcut.message.thread_ts || shortcut.message.ts;

  const keywordSourceText = body.message.blocks.length
    ? findBlockTextRecurse(body.message.blocks).join(" ")
    : body.message.text;

  const keywords = getKeywords(keywordSourceText);

  const { permalink } = await client.chat.getPermalink({
    channel: channel.id,
    message_ts: ts,
  });

  const referenceMessage = await getParentmostMessage(client, channel, ts);

  const referenceText = referenceMessage.text;

  const metadata = { ts, channel, permalink, referenceText };

  try {
    await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: getView({
        keywords,
        metadata,
        referenceText,
      }),
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
