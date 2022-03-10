const getKeywords = require("../../../util/getKeywords");
const getParentmostMessage = require("../../../util/getParentmostMessage");
const getView = require("../templates/view_shortcut");

module.exports = async ({ shortcut, body, ack, client, logger }) => {
  await ack();

  const { channel } = shortcut;

  const ts = shortcut.message.thread_ts || shortcut.message.ts;

  const keywordSourceText = body.message.text
    ? body.message.text
    : findBlockTextRecurse(body.message.blocks).join(" ");

  const keywords = getKeywords(keywordSourceText);

  const { permalink } = await client.chat.getPermalink({
    channel: channel.id,
    message_ts: ts,
  });

  const metadata = { ts, channel, permalink };

  const referenceMessage = await getParentmostMessage(client, channel, ts);

  try {
    const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: getView({
        keywords,
        metadata,
        referenceText: referenceMessage.text,
      }),
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
